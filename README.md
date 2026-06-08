# 🦄 KAI.TOWN Browser Extension

A powerful browser extension for the Brony Town community with customizable themes, color filters, and video backgrounds.

## Features

### 🌓 Day/Night Mode
Switch between day and night themes instantly. The night mode features a sleek black background with neon green accents for that cyberpunk aesthetic.

### 🌈 Rainbow Hue Customization
Adjust the hue of the entire interface with a 360° color spectrum. Includes preset color names (Red, Orange, Yellow, Green, Cyan, Blue, Purple, Magenta, and more).

### 🎥 YouTube Background Videos
Add any YouTube video as your background. The videos play on loop with mute and low opacity for the perfect ambient experience.

### ✨ KAI.TOWN Branding
Beautiful neon-styled "KAI.TOWN" branding with animated glow effects and scanline animations for that authentic cyberpunk feel.

## Installation

### For Developers/Local Installation:

1. Clone or download this repository
2. Open your browser's extension management page:
   - **Chrome/Edge:** `chrome://extensions/` or `edge://extensions/`
   - **Firefox:** `about:debugging#/runtime/this-firefox`
3. Enable "Developer mode" (toggle in the top right)
4. Click "Load unpacked" and select the extension directory
5. The extension is now installed and ready to use!

### Using the ZIP File:

1. Download the `KAI.TOWN-extension.zip` file
2. Extract the ZIP file to a folder
3. Follow steps 2-5 above

## Usage

### Opening the Control Panel
Click the KAI.TOWN icon in your browser toolbar to open the control panel.

### Day/Night Mode
- Toggle the switch to enable night mode
- The entire browsing experience will transform with the selected theme

### Rainbow Hue
- Drag the hue slider to choose your color
- The preview bar shows the current color
- Changes apply in real-time across all tabs

### YouTube Videos
1. Copy a YouTube video URL (e.g., `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
2. Paste it into the "YouTube Video URL" field
3. Click "Set Background Video"
4. The video will play on loop in the background with low opacity

### Reset Settings
Click "Reset All Settings" to restore default settings across all features.

## Technical Details

### Files Included:
- `manifest.json` - Extension configuration
- `popup.html` - Control panel UI
- `popup.css` - Control panel styling
- `popup.js` - Control panel functionality
- `content.js` - Page content injection and styling
- `background.js` - Service worker for extension management
- `README.md` - This file

### Browser Compatibility:
- ✅ Google Chrome (90+)
- ✅ Microsoft Edge (90+)
- ⚠️ Firefox (requires manifest v2 compatible version)
- ✅ Brave Browser
- ✅ Opera Browser

## Design Philosophy

KAI.TOWN embraces a cyberpunk aesthetic with:
- **Neon Green (#00FF88)** as the primary accent color
- **Black backgrounds** for contrast and eye comfort
- **Glowing effects** and animations for immersion
- **Scanline effects** reminiscent of retro monitors
- **Smooth transitions** for a polished feel

## Tips & Tricks

1. **Combine Effects:** Try dark mode + a cool blue hue + an ambient video for maximum atmosphere
2. **Video Background:** Works best with looping ambient videos, lo-fi music videos, or nature streams
3. **Performance:** If you experience slowdowns, disable the video background or use darker videos
4. **Accessibility:** Use high contrast colors (dark mode + bright hue) for better readability

## Troubleshooting

### Videos not playing?
- Ensure the YouTube URL is correct and public
- Videos must be embeddable (some are region-restricted)
- The video will have very low opacity by default

### Extension not showing on some websites?
- Some websites have strict content security policies
- The extension works best on standard websites
- Try reloading the page or checking developer console for errors

### Settings not saving?
- Check if your browser allows extensions to use local storage
- Try resetting all settings and reconfiguring
- Ensure you're not in private/incognito mode (not supported)

## Support & Feedback

Have suggestions or found a bug? 
- Create an issue on the [GitHub repository](https://github.com/Hackinjava/KAI.TOWN)
- Join the Brony Town community for support

## License

This extension is provided as-is for the Brony Town community.

---

**Made with 🖤 for the Brony Town community**

*"Where everypony is welcome"* 🦄
