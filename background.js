// Service Worker for KAI.TOWN Extension

chrome.runtime.onInstalled.addListener(() => {
    console.log('KAI.TOWN extension installed!');
    
    // Initialize storage with default values
    chrome.storage.local.get(['darkMode', 'rainbowHue', 'youtubeVideoId'], (result) => {
        if (!result.darkMode) {
            chrome.storage.local.set({ darkMode: false });
        }
        if (!result.rainbowHue) {
            chrome.storage.local.set({ rainbowHue: 0 });
        }
    });
});

// Handle extension updates
chrome.runtime.onUpdateAvailable.addListener(() => {
    chrome.runtime.reload();
});
