# Glassmorphism MacOS Extension for Visual Studio Code

## Overview

Bring the stunning Acrylic/Glass effect to your Visual Studio Code with Glassmorphism MacOS. Experience a sleek, macOS-inspired interface right in your editor.

![Glassmorphism Effect Screenshot](./screenshot.png)

### Quick Links

- [FAQs](#FAQs)
- [GitHub Repository](https://github.com/krautgti/glass-theme-doyle)
- [Visual Studio Code Marketplace](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)
- [Report Issues](https://github.com/krautgti/glass-theme-doyle/issues)

### Badges

[![Version](https://vsmarketplacebadges.dev/version/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)
[![Rating](https://vsmarketplacebadges.dev/rating-star/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)
[![Installs](https://vsmarketplacebadges.dev/installs-short/krautgti.glass-theme-doyle.png)](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle)
[![Tested VS Code Version](https://img.shields.io/badge/Vistual%20Studio%20Code%20v1.80.4-Tested%20✔%EF%B8%8F-brightgreen?logo=Visual-Studio-Code&logoColor=ffffff)]()
[![GitHub Stars](https://img.shields.io/github/stars/krautgti/glass-theme-doyle.svg?style=social)](https://github.com/krautgti/glass-theme-doyle)

## Important Notice

### VSCode Corruption Warning

Upon installation, you might see a warning about VS Code being "corrupt." This is due to the extension modifying VS Code's CSS file. You can safely dismiss this warning and prevent it from reappearing.

![Corruption Warning Screenshot](./warn.png)
![Warning Dismissal Screenshot](./warnfix.png)

For removing the "[Unsupported]" title bar warning, use [Fix VSCode Checksums](https://marketplace.visualstudio.com/items?itemName=lehni.vscode-fix-checksums).

## Supported Operating Systems

**Windows Compatibility Issue:** Due to breaking changes in Electron 27 with VSCode 1.86 and newer, the Glassmorphism effect might not work as expected on Windows 10/11. We've identified a temporary fix, but it disables window snap and maximize features, which we find too inconvenient to roll out.

**Recommended Solution:** For an uninterrupted Glassmorphism experience on Windows, please downgrade to VSCode version 1.85.2, available here: [https://update.code.visualstudio.com/1.85.2/win32-x64-user/stable](https://update.code.visualstudio.com/1.85.2/win32-x64-user/stable). We're working on a better fix and will update you as soon as possible.

![Windows Working on on VSCode 1.85.2](./windows.png)
![Windows Settings on VSCode 1.85.2](./windowsSettings.png)


- Windows 11
- Windows 10
- macOS

## Getting Started

1. Ensure your VSCode theme is 'Dark+' or a [supported theme](#vscode_vibrancy.theme).
2. Install Glassmorphism MacOS from the [VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=krautgti.glass-theme-doyle).
3. Activate the "Reload Vibrancy" command (Press F1).
4. Restart VSCode when prompted.

Remember to re-enable Vibrancy after every VS Code update.

## Configuration Options

- **vscode_vibrancy.type**: Choose the Vibrancy Effect type (auto, acrylic, appearance-based, etc.).
- **vscode_vibrancy.opacity**: Set the opacity level (-1.0 to 1.0).
- **vscode_vibrancy.imports**: Import custom CSS/JS files.
- **vscode_vibrancy.preventFlash**: Toggle new method to prevent window flashing (default: true).
- **vscode_vibrancy.refreshInterval**: Set refresh interval for transparency update (1 to 1000 ms).

## FAQs

- **Uninstalling**: Use "Disable Vibrancy" command and restart VS Code.
- **Terminal Issues**: Change the terminal renderer type to dom.
- **Administrator Privileges Prompt**: Restart VS Code as an administrator.
- **EROFS Error on macOS**: Move VS Code to `/Applications` or use the provided terminal command.
- **Windows 10 Lag Issues**: Read the [discussion](https://github.com/EYHN/vscode-vibrancy/discussions/80).
- **Effect Not Working**: Ensure transparency effects are enabled in your OS settings.
- **Windows Not Working**: Currently, For the best experience on Windows, downgrade to VSCode 1.85.2. Stay tuned for updates on a fix for newer versions!

