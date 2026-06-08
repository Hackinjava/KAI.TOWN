// Day/Night Toggle
const dayNightToggle = document.getElementById('dayNightToggle');
const themeStatus = document.getElementById('themeStatus');

dayNightToggle.addEventListener('change', () => {
    const isDarkMode = dayNightToggle.checked;
    chrome.storage.local.set({ darkMode: isDarkMode });
    themeStatus.textContent = isDarkMode ? 'Night Mode' : 'Day Mode';
    
    // Send message to content script
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { 
                type: 'THEME_CHANGE', 
                isDarkMode: isDarkMode 
            }).catch(() => {
                // Silent fail for tabs that don't have content script
            });
        });
    });
});

// Rainbow Hue Slider
const rainbowHue = document.getElementById('rainbowHue');
const huePreview = document.getElementById('huePreview');
const hueValue = document.getElementById('hueValue');

const hueNames = {
    0: 'Red',
    30: 'Orange',
    60: 'Yellow',
    90: 'Lime',
    120: 'Green',
    150: 'Mint',
    180: 'Cyan',
    210: 'Sky Blue',
    240: 'Blue',
    270: 'Purple',
    300: 'Magenta',
    330: 'Pink'
};

function getHueName(hue) {
    const closest = Object.keys(hueNames).reduce((prev, curr) => 
        Math.abs(curr - hue) < Math.abs(prev - hue) ? curr : prev
    );
    return hueNames[closest];
}

rainbowHue.addEventListener('input', () => {
    const hue = rainbowHue.value;
    const color = `hsl(${hue}, 100%, 50%)`;
    huePreview.style.background = color;
    hueValue.textContent = `${hue}° - ${getHueName(hue)}`;
    
    chrome.storage.local.set({ rainbowHue: hue });
    
    // Send message to content script
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { 
                type: 'HUE_CHANGE', 
                hue: hue 
            }).catch(() => {
                // Silent fail for tabs that don't have content script
            });
        });
    });
});

// YouTube Video URL
const videoUrl = document.getElementById('videoUrl');
const setVideoBtn = document.getElementById('setVideoBtn');
const videoStatus = document.getElementById('videoStatus');

function extractYouTubeId(url) {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
}

setVideoBtn.addEventListener('click', () => {
    const url = videoUrl.value.trim();
    
    if (!url) {
        videoStatus.textContent = 'Please enter a video URL';
        videoStatus.style.color = '#ff4444';
        return;
    }
    
    const videoId = extractYouTubeId(url);
    
    if (!videoId) {
        videoStatus.textContent = 'Invalid YouTube URL';
        videoStatus.style.color = '#ff4444';
        return;
    }
    
    chrome.storage.local.set({ youtubeVideoId: videoId, youtubeUrl: url });
    videoStatus.textContent = '✓ Video set successfully!';
    videoStatus.style.color = '#00ff88';
    
    // Send message to content script
    chrome.tabs.query({}, (tabs) => {
        tabs.forEach(tab => {
            chrome.tabs.sendMessage(tab.id, { 
                type: 'VIDEO_CHANGE', 
                videoId: videoId 
            }).catch(() => {
                // Silent fail for tabs that don't have content script
            });
        });
    });
    
    setTimeout(() => {
        videoStatus.textContent = 'Background video set';
        videoStatus.style.color = '#00ff88';
    }, 2000);
});

// Reset Button
const resetBtn = document.getElementById('resetBtn');

resetBtn.addEventListener('click', () => {
    if (confirm('Reset all settings to default?')) {
        chrome.storage.local.clear(() => {
            dayNightToggle.checked = false;
            rainbowHue.value = 0;
            videoUrl.value = '';
            huePreview.style.background = 'hsl(0, 100%, 50%)';
            hueValue.textContent = '0° - Red';
            themeStatus.textContent = 'Day Mode';
            videoStatus.textContent = 'No video set';
            videoStatus.style.color = '#00ff88';
            
            // Send reset message to all tabs
            chrome.tabs.query({}, (tabs) => {
                tabs.forEach(tab => {
                    chrome.tabs.sendMessage(tab.id, { 
                        type: 'RESET_SETTINGS' 
                    }).catch(() => {
                        // Silent fail for tabs that don't have content script
                    });
                });
            });
        });
    }
});

// Load saved settings on popup open
chrome.storage.local.get(['darkMode', 'rainbowHue', 'youtubeUrl'], (result) => {
    if (result.darkMode) {
        dayNightToggle.checked = true;
        themeStatus.textContent = 'Night Mode';
    }
    
    if (result.rainbowHue) {
        rainbowHue.value = result.rainbowHue;
        const hue = result.rainbowHue;
        const color = `hsl(${hue}, 100%, 50%)`;
        huePreview.style.background = color;
        hueValue.textContent = `${hue}° - ${getHueName(hue)}`;
    }
    
    if (result.youtubeUrl) {
        videoUrl.value = result.youtubeUrl;
        videoStatus.textContent = '✓ Video set';
    }
});
