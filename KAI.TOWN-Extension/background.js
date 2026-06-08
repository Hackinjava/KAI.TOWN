// Service worker for KAI.TOWN Extension

console.log('KAI.TOWN background service worker loaded');

// Listen for extension installation
chrome.runtime.onInstalled.addListener(() => {
  console.log('KAI.TOWN extension installed');
});

// Listen for messages from content scripts and popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Message received:', request);
  sendResponse({ received: true });
});
