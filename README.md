# Visual Studio Code Extension - Glassmorphism Theme MacOS

Enable Acrylic/Glass effect in VS Code.

![screenshot](./screenshot.png)

# Getting Started

1. Make sure the VSCode theme you've selected is 'Dark+' or one of the [supported themes](#vscode_glasstheme.theme)

![step-1](./step-1.png)

2. Install the extension from [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=KrautGTI.glass-theme-doyle).

3. Press F1 and activate command "Reload glasstheme."

![step-3](./step-3.png)

4. Restart VSCode when prompted.

Each time VS Code is updated, please re-enable glasstheme using the same steps.

## Options

#### vscode_glasstheme.type

Native method of glasstheme Effect.

- auto : Automatically switch with system version.
- acrylic : (Windows 10 only) Fluent Design blur.
- appearance-based, light, dark, titlebar, selection, menu, popover, sidebar, medium-light, ultra-dark: (MacOS only)

#### vscode_glasstheme.opacity

Opacity of glasstheme Effect. -1 is theme default, 0 is maximum transparency, and 1 will remove all transparency.

_value: -1.0 ~ 1.0_

#### vscode_glasstheme.imports

Import custom CSS/JS files into VSCode, as file paths. The files will be imported in the order they are listed.

EXAMPLE: `C:/Users/MyUserName/Documents/custom.css`

_value: array[]_

#### vscode_glasstheme.preventFlash

Use a new method for preventing window flashing during resizing. Eliminates the need for a refresh interval, but may be less compatible in some cases.

_boolean, default is true_

#### vscode_glasstheme.refreshInterval

Refresh interval (in milliseconds) for making the background transparent after window resizing. Lower values make the update less visible at the cost of increased CPU utilization. **Ignored when using "Prevent Flash" method.**

_value: 1 ~ 1000, default is 10_

#### vscode_glasstheme.theme

Select glasstheme theme:

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

> You can contribute more themes! [see here](https://github.com/illixion/glass-theme-doyle/tree/master/themes).

# FAQs

### How to uninstall glasstheme?

Press F1 or ⌘+Shift+P and activate command "Disable glasstheme", then restart Visual Studio Code.

### Effect doesn't work for terminal?

Check your settings. You should change the renderer type of the terminal to dom.

`"terminal.integrated.gpuAcceleration": "off"`

### Prompt "Run Visual Studio Code with administrator privileges"?

It usually appears on windows when you are using the VSCode System Installer. You should close VSCode completely, then run VSCode as administrator and retry what you did before (Enable/Reload/Disable glasstheme).

### `EROFS: read-only file system` when enabling glasstheme on macOS

Your installation of VSCode is affected by App Translocation. To fix this, either use the Finder and move VSCode to `/Applications` (or move it out of `/Applications` and then back in), or run the following terminal command:

```shell
sudo xattr -dr com.apple.quarantine "/Applications/Visual Studio Code.app"
```