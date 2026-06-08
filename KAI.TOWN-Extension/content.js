// Main overlay & effects script for KAI.TOWN Extension

(function() {
  'use strict';

  // Initialize content script
  console.log('KAI.TOWN content script loaded');

  // Listen for messages from popup
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === 'activate') {
      activateEffects();
      sendResponse({ status: 'Effects activated' });
    } else if (request.action === 'deactivate') {
      deactivateEffects();
      sendResponse({ status: 'Effects deactivated' });
    }
  });

  function activateEffects() {
    // Add your overlay and effects code here
    console.log('Effects activated');
    document.body.classList.add('kai-town-active');
  }

  function deactivateEffects() {
    // Remove effects
    console.log('Effects deactivated');
    document.body.classList.remove('kai-town-active');
  }
})();
