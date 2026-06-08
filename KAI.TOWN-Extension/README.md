# KAI.TOWN Chrome Extension

## Installation Instructions

### Prerequisites
- Chrome browser (v90 or later)
- Basic knowledge of Chrome extensions

### Installation Steps

1. **Download the Extension**
   - Clone or download the `kaitown.zip` file
   - Extract the contents to a folder

2. **Load in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `KAI.TOWN-Extension` folder

3. **First Use**
   - Click the KAI.TOWN extension icon in your Chrome toolbar
   - Use the control panel to activate/deactivate effects

### File Structure

```
KAI.TOWN-Extension/
├── manifest.json       - Extension configuration (Manifest V3)
├── content.js          - Main overlay & effects script
├── content.css         - Content styles
├── background.js       - Service worker
├── popup.html          - Control panel UI
├── popup.js            - Control panel logic
├── popup.css           - Control panel styling
├── images/
│   ├── icon16.png      - Extension icon (16x16)
│   ├── icon48.png      - Extension icon (48x48)
│   └── icon128.png     - Extension icon (128x128)
└── README.md           - This file
```

### Configuration

Edit `manifest.json` to customize:
- Extension name and description
- Permissions
- Host permissions
- Content scripts matching patterns

### Development

1. Make changes to the source files
2. Go to `chrome://extensions/`
3. Click the refresh icon on the KAI.TOWN extension
4. Test your changes

### Troubleshooting

- **Extension not loading?** Check that all required files are present
- **Permissions error?** Review the `permissions` in `manifest.json`
- **Icons not showing?** Add PNG images to the `images/` folder

### Support

For issues or feature requests, visit the main repository.
