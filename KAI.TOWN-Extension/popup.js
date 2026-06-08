// Control panel logic for KAI.TOWN Extension

document.addEventListener('DOMContentLoaded', () => {
  const activateBtn = document.getElementById('activateBtn');
  const deactivateBtn = document.getElementById('deactivateBtn');
  const statusDiv = document.getElementById('status');

  activateBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'activate' }, (response) => {
        if (response) {
          statusDiv.textContent = response.status;
          statusDiv.classList.add('active');
        }
      });
    });
  });

  deactivateBtn.addEventListener('click', () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.tabs.sendMessage(tabs[0].id, { action: 'deactivate' }, (response) => {
        if (response) {
          statusDiv.textContent = response.status;
          statusDiv.classList.remove('active');
        }
      });
    });
  });
});
