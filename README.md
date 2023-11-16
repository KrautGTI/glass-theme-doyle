# Visual Studio Code Extension - Glassmorphism MacOS

> For questions about troubleshooting, installing or uninstalling Vibrancy Continued, please check the [FAQs](#FAQs).

Enable Acrylic/Glass effect in VS Code.

![screenshot](./screenshot.png)

[![](https://vsmarketplacebadges.dev/version/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)&nbsp;
[![](https://vsmarketplacebadges.dev/rating-star/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)&nbsp;
[![](https://vsmarketplacebadges.dev/installs-short/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)

![](https://img.shields.io/badge/Vistual%20Studio%20Code%20v1.80.4-Tested%20✔%EF%B8%8F-brightgreen?logo=Visual-Studio-Code&logoColor=ffffff)

[![](https://img.shields.io/github/stars/krautgti/glass-theme-doyle.svg?style=social)](https://github.com/krautgti/glass-theme-doyle)&nbsp;
[![](https://img.shields.io/github/watchers/krautgti/glass-theme-doyle.svg?style=social)](https://github.com/krautgti/glass-theme-doyle)

Links: [GitHub](https://github.com/krautgti/glass-theme-doyle) | [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle) | [issues](https://github.com/krautgti/glass-theme-doyle/issues)


# "Your VSCode installation appears to be corrupt"

This extension works by editing VS Code's checksum-verified CSS file, which means that a warning prompt will appear after installing and enabling `glass-theme-doyle`. This warning is safe to disregard, and all changes can be reverted. Click on the cogwheel and select **Don't Show Again** to hide it.

![screenshot](./warn.png)
![screenshot](./warnfix.png)

To fix the "[Unsupported]" warning on VS Code's title bar, please refer to this extension: [Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums).

# Supported Operating Systems

Windows 11 ✔

Windows 10 ✔

macOS ✔

# Getting Started

1. Make sure the VSCode theme you've selected is 'Dark+' or one of the [supported themes](#vscode_vibrancy.theme)

![step-1](./step-1.png)

2. Install the extension from [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle).

3. Press F1 and activate command "Reload Vibrancy."

![step-3](./step-3.png)

4. Restart VSCode when prompted.

Each time VS Code is updated, please re-enable Vibrancy using the same steps.

## Options

#### vscode_vibrancy.type

Native method of Vibrancy Effect.

- auto : Automatically switch with system version.
- acrylic : (Windows 10 only) Fluent Design blur.
- appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light, ultra-dark: (MacOS only)

#### vscode_vibrancy.opacity

Opacity of Vibrancy Effect. -1 is theme default, 0 is maximum transparency, and 1 will remove all transparency.

_value: -1.0 ~ 1.0_

#### vscode_vibrancy.imports

Import custom CSS/JS files into VSCode, as file paths. The files will be imported in the order they are listed.

EXAMPLE: `C:/Users/MyUserName/Documents/custom.css`

_value: array[]_

#### vscode_vibrancy.preventFlash

Use a new method for preventing window flashing during resizing. Eliminates the need for a refresh interval, but may be less compatible in some cases.

_boolean, default is true_

#### vscode_vibrancy.refreshInterval

Refresh interval (in milliseconds) for making the background transparent after window resizing. Lower values make the update less visible at the cost of increased CPU utilization. **Ignored when using "Prevent Flash" method.**

_value: 1 ~ 1000, default is 10_

#### vscode_vibrancy.theme

Select Vibrancy theme:

- Default Dark
- Dark (Only Subbar)
- Default Light
- Light (Only Subbar)
- Noir et blanc
- Tokyo Night Storm
- Tokyo Night Storm (Outer)
- Solarized Dark+

| Theme                                                                                                               | Screenshot                               |
| ------------------------------------------------------------------------------------------------------------------- | ---------------------------------------- |
| Default Dark                                                                                                        | ![](./theme-default.jpg)                 |
| Dark (Only Subbar)                                                                                                  | ![](./theme-subbar.jpg)                  |
| Noir et blanc                                                                                                       | ![](./theme-noir-et-blanc.jpg)           |
| Tokyo Night Storm                                                                                                   | ![](./theme-tokyo-night-storm.png)       |
| Tokyo Night Storm (Only Subbar)                                                                                     | ![](./theme-tokyo-night-storm-outer.png) |
| Solarized Dark+ (with theme: [Solarized](https://marketplace.visualstudio.com/items?itemName=ryanolsonx.solarized)) | ![](./theme-solarized-dark%2B.png)       |
| Catpuccin Mocha                                                                                                     | ![](./theme-catpuccin-mocha.png)         |

> You can contribute more themes! [see here](https://github.com/krautgti/glass-theme-doyle/tree/master/themes).

# FAQs

### How to uninstall Vibrancy?

Press F1 or ⌘+Shift+P and activate command "Disable Vibrancy", then restart Visual Studio Code.

### Effect doesn't work for terminal?

Check your settings. You should change the renderer type of the terminal to dom.

`"terminal.integrated.gpuAcceleration": "off"`

### Prompt "Run Visual Studio Code with administrator privileges"?

It usually appears on windows when you are using the VSCode System Installer. You should close VSCode completely, then run VSCode as administrator and retry what you did before (Enable/Reload/Disable Vibrancy).

### `EROFS: read-only file system` when enabling Vibrancy on macOS

Your installation of VSCode is affected by App Translocation. To fix this, either use the Finder and move VSCode to `/Applications` (or move it out of `/Applications` and then back in), or run the following terminal command:

```shell
sudo xattr -dr com.apple.quarantine "/Applications/Visual Studio Code.app"
```

### I'm on Windows 10 and I'm experiencing lag when dragging the window

[Please read here for details](https://github.com/EYHN/vscode-vibrancy/discussions/80).

### Effect doesn't work, but there aren't any errors

Ensure that you don't have transparency effects disabled globally through your OS settings. This can usually be found under Accessibility settings, and it may be called "Transparency effects" or "Reduce transparency." If that didn't help, you can also check the Console section in VSCode's Developer Tools, which can be accessed through the command palette.

If nothing else worked, try reinstalling VSCode, you won't lose any settings and this will ensure that your VSCode installation is consistent.