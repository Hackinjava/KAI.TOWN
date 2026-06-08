// Create and inject KAI.TOWN overlay
function createKAITownOverlay() {
    let overlay = document.getElementById('kai-town-overlay');
    
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.id = 'kai-town-overlay';
        document.body.appendChild(overlay);
    }
    
    return overlay;
}

// Create video background
function createVideoBackground(videoId) {
    let videoContainer = document.getElementById('kai-video-background');
    
    if (!videoContainer) {
        videoContainer = document.createElement('div');
        videoContainer.id = 'kai-video-background';
        document.body.insertBefore(videoContainer, document.body.firstChild);
    }
    
    videoContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="100%" 
            src="https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1"
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen>
        </iframe>
    `;
    
    return videoContainer;
}

// Apply theme
function applyTheme(isDarkMode) {
    const overlay = createKAITownOverlay();
    
    if (isDarkMode) {
        overlay.style.backgroundImage = 'linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%)';
    } else {
        overlay.style.backgroundImage = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 240, 0.95) 100%)';
    }
}

// Apply hue filter
function applyHueFilter(hue) {
    const overlay = createKAITownOverlay();
    
    if (hue && hue !== '0') {
        overlay.style.filter = `hue-rotate(${hue}deg)`;
    } else {
        overlay.style.filter = 'none';
    }
}

// Inject KAI.TOWN styles
function injectStyles() {
    let styleSheet = document.getElementById('kai-town-styles');
    
    if (!styleSheet) {
        styleSheet = document.createElement('style');
        styleSheet.id = 'kai-town-styles';
        styleSheet.textContent = `
            @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&display=swap');
            
            #kai-town-overlay {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 999999;
                pointer-events: none;
                background: linear-gradient(135deg, rgba(0, 0, 0, 0.9) 0%, rgba(26, 26, 46, 0.9) 100%);
                transition: all 0.5s ease;
            }
            
            #kai-video-background {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                z-index: 1;
                overflow: hidden;
                opacity: 0.15;
            }
            
            #kai-video-background iframe {
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                min-width: 100%;
                min-height: 100%;
                width: 100%;
                height: 100%;
            }
            
            body::before {
                content: '';
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background: 
                    linear-gradient(90deg, 
                        transparent 0%, 
                        rgba(0, 255, 136, 0.05) 50%, 
                        transparent 100%);
                z-index: 999998;
                pointer-events: none;
                animation: scanlines 8s linear infinite;
            }
            
            @keyframes scanlines {
                0% { transform: translateY(-100%); }
                100% { transform: translateY(100%); }
            }
            
            /* KAI.TOWN branding */
            .kai-branding {
                position: fixed;
                top: 20px;
                left: 20px;
                z-index: 1000000;
                font-family: 'Orbitron', monospace;
                color: #ffffff;
                text-shadow: 0 0 10px rgba(0, 255, 136, 0.6), 0 0 20px rgba(0, 255, 136, 0.3);
                letter-spacing: 3px;
                font-weight: bold;
                font-size: 24px;
            }
            
            .kai-branding::after {
                content: '';
                display: block;
                position: absolute;
                bottom: -10px;
                left: 0;
                width: 100%;
                height: 2px;
                background: linear-gradient(90deg, #00ff88, transparent);
                box-shadow: 0 0 10px rgba(0, 255, 136, 0.6);
            }
            
            /* Neon glow effect */
            @keyframes neon-pulse {
                0%, 100% {
                    text-shadow: 
                        0 0 10px rgba(0, 255, 136, 0.6),
                        0 0 20px rgba(0, 255, 136, 0.3),
                        0 0 30px rgba(0, 255, 136, 0.1);
                }
                50% {
                    text-shadow: 
                        0 0 20px rgba(0, 255, 136, 0.8),
                        0 0 30px rgba(0, 255, 136, 0.5),
                        0 0 40px rgba(0, 255, 136, 0.2);
                }
            }
            
            .kai-branding {
                animation: neon-pulse 3s ease-in-out infinite;
            }
        `;
        document.head.appendChild(styleSheet);
    }
}

// Add KAI.TOWN branding
function addBranding() {
    let branding = document.getElementById('kai-branding');
    
    if (!branding) {
        branding = document.createElement('div');
        branding.id = 'kai-branding';
        branding.className = 'kai-branding';
        branding.textContent = '⧖ KAI.TOWN ⧗';
        branding.style.zIndex = '1000000';
        document.body.appendChild(branding);
    }
}

// Initialize
function initialize() {
    injectStyles();
    addBranding();
    createKAITownOverlay();
    
    chrome.storage.local.get(['darkMode', 'rainbowHue', 'youtubeVideoId'], (result) => {
        applyTheme(result.darkMode || false);
        
        if (result.rainbowHue) {
            applyHueFilter(result.rainbowHue);
        }
        
        if (result.youtubeVideoId) {
            createVideoBackground(result.youtubeVideoId);
        }
    });
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    switch(request.type) {
        case 'THEME_CHANGE':
            applyTheme(request.isDarkMode);
            break;
        case 'HUE_CHANGE':
            applyHueFilter(request.hue);
            break;
        case 'VIDEO_CHANGE':
            createVideoBackground(request.videoId);
            break;
        case 'RESET_SETTINGS':
            const overlay = createKAITownOverlay();
            overlay.style.backgroundImage = 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(240, 240, 240, 0.95) 100%)';
            overlay.style.filter = 'none';
            const videoContainer = document.getElementById('kai-video-background');
            if (videoContainer) {
                videoContainer.innerHTML = '';
            }
            break;
    }
    sendResponse({ status: 'success' });
});

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize);
} else {
    initialize();
}
