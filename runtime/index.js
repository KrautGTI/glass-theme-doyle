const electron = require('electron');
/**
 * @type {(window) => Record<'interval' | 'overwrite', {install: () => void, uninstall: () => void>}
 */
const transparencyMethods = require('./methods');

/**
 * @type {{
 *  os: string,
 *  config: {
 *    type:  "auto" | "acrylic" | "appearance-based" | "light" | "dark" | "titlebar" | "selection" | "menu" | "popover" | "sidebar" | "medium-light" | "ultra-dark",
 *    opacity: number,
 *    theme: "Default Dark" | "Dark (Only Subbar)" | "Default Light" | "Light (Only Subbar)" | "Tokyo Night Storm" | "Tokyo Night Storm (Outer)" | "Noir et blanc" | "Dark (Exclude Tab Line)" | "Solarized Dark+",
 *    imports: string[],
 *    refreshInterval: number,
 *    preventFlash: boolean
 *  },
 *  themeCSS: string,
 *  theme: any,
 *  imports: {
 *    css: string,
 *    js: string
 *  }
 * }}
 */
const app = global.vscode_glasstheme_plugin;
// @ts-check

const macosType = [
  'appearance-based',
  'light',
  'dark',
  'titlebar',
  'selection',
  'menu',
  'popover',
  'sidebar',
  'medium-light',
  'ultra-dark',
];

const windowsType = ['acrylic'];

/**
 * @param {string} hex
 * @returns {{ r: any; g: any; b: any; } | null}
 */
function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16),
    }
    : null;
}

electron.app.on('browser-window-created', (_, window) => {
  const methods = transparencyMethods(window);
  const hackMethod = app.config.preventFlash ? 'overwrite' : 'interval';
  const effects = methods[hackMethod];

  var type = app.config.type;
  if (type !== 'auto') {
    if (app.os === 'win10' && !windowsType.includes(type)) type = 'auto';
    if (app.os === 'macos' && !macosType.includes(type)) type = 'auto';
  }
  if (type === 'auto') {
    type = app.theme.type[app.os];
  }

  let opacity = app.config.opacity;
  // if opacity < 0, use the theme default opacity
  if (opacity < 0) {
    opacity = app.theme.opacity[app.os];
  }

  const backgroundRGB = hexToRgb(app.theme.background) || { r: 0, g: 0, b: 0 };

  if (app.os === 'win10') {
    const bindings = require('./glasstheme.js');
    bindings.setglasstheme(
      window.getNativeWindowHandle().readInt32LE(0),
      1,
      backgroundRGB.r,
      backgroundRGB.g,
      backgroundRGB.b,
      0
    );
    const win10refresh = require('./win10refresh.js');
    win10refresh(window, 60);

    window.webContents.once('dom-ready', () => {
      const currentURL = window.webContents.getURL();

      if (
        !(
          currentURL.includes('workbench.html') ||
          currentURL.includes('workbench-monkey-patch.html')
        )
      ) {
        return;
      }

      if (window.isMaximized()) {
        window.unmaximize();
        window.maximize();
      }
    });
  }

  window.on('closed', () => {
    effects.uninstall();
  });

  window.webContents.on('dom-ready', () => {
    const currentURL = window.webContents.getURL();

    if (
      !(
        currentURL.includes('workbench.html') ||
        currentURL.includes('workbench-monkey-patch.html')
      )
    ) {
      return;
    }

    window.setBackgroundColor('#00000000');

    effects.install();

    if (app.os === 'macos') {
      window.setglasstheme(type);

      // hack
      const width = window.getBounds().width;
      window.setBounds({
        width: width + 1,
      });
      window.setBounds({
        width,
      });
    }

    injectHTML(window);
  });
});

function injectHTML(window) {
  window.webContents.executeJavaScript(`(function(){
    const vscodeglassthemeTTP = window.trustedTypes.createPolicy("Vscodeglasstheme", { createHTML (v) { return v; }});

    document.getElementById("vscode-glasstheme-style")?.remove();
    const styleElement = document.createElement("div");
    styleElement.id = "vscode-glasstheme-style";
    styleElement.innerHTML = vscodeglassthemeTTP.createHTML(${JSON.stringify(
    styleHTML()
  )});
    document.body.appendChild(styleElement);

    document.getElementById("vscode-glasstheme-script")?.remove();
    const scriptElement = document.createElement("div");
    scriptElement.id = "vscode-glasstheme-script";
    scriptElement.innerHTML = vscodeglassthemeTTP.createHTML(${JSON.stringify(
    scriptHTML()
  )});
    document.body.appendChild(scriptElement);
  })();`);
}


function scriptHTML() {
  return app.imports.js;
}

function styleHTML() {
  if (app.os === 'unknown') return '';

  var type = app.config.type;
  if (type === 'auto') {
    type = app.theme.type[app.os];
  }

  let opacity = app.config.opacity;

  if (opacity < 0) {
    opacity = app.theme.opacity[app.os];
  }

  const backgroundRGB = hexToRgb(app.theme.background) || { r: 0, g: 0, b: 0 };

  const HTML = [
    `
    <style>
      html {
        background: rgba(${backgroundRGB.r},${backgroundRGB.g},${backgroundRGB.b},${opacity}) !important;
      }
      ${app.themeCSS}
    </style>
    `,
    app.imports.css,
  ];

  return HTML.join('');
}