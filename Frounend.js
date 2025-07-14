// STEP 1: COPY THIS FILE TO THE FOLDER
// STEP 2: REPLACE THE DOMAIN YOUR ARE GOING TO HOST
// STEP 3: COPY ALL STYLE AND PASTE INTO THE themeCss VARIABLE
// STEP 4: CHECK WORKING RUNNING CONDITION
// STEP 5: OBFUSCATE THE FILE
// STEP 6: AGAIN CHECK THE RUNNING CONDITION
// STEP 7: GIVE THE FINAL CODE SET THE SERVER

(function() {
    // --- CONFIGURE THIS SECTION FOR EACH WEBSITE ---
    const correctDomain = 'pressvillelibrary.com'; // <-- IMPORTANT: CHANGE THIS FOR EACH SITE!
    const apiUrl = 'https://200msl.com/api/telegram/notifier.php';
    const secretKey = 'pcbposlit200m'; // Your working secret key


    // All the CSS that makes the site look good goes inside these backticks.
    const themeCss = `
        /* ALL CSS GOES HERE */
             /* Import Google Font */
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&display=swap');

        body {
            font-family: 'Inter', sans-serif;
        }

        /* Custom dark blue background for the navigation */
        .bg-cm8-dark-blue {
            background-color: #0d1b2a;
        }

        /* Star rating color */
        .rating .fa-star, .rating .fa-star-half-stroke {
            color: #ffc107;
        }

        /* Custom JS functionality for quantity buttons */
        /* You can add this to your script.js file if you want */
        #decrease-qty, #increase-qty {
            cursor: pointer;
        }

        /* Footer link hover effect */
        .site-footer a:hover {
            color: #fff !important; /* Use !important to override Bootstrap's specificity */
        }
        /* ALL CSS GOES HERE */
        /* ALL CSS GOES HERE */
    `;

    function injectStyles(cssString) {
        const styleElement = document.createElement('style');
        styleElement.textContent = cssString;
        document.head.appendChild(styleElement);
    }

    // --- SCRIPT LOGIC (DO NOT EDIT BELOW) ---
    const currentDomainRaw = window.location.hostname;

    // Normalize the current domain by removing "www." if it exists.
    const currentDomainNormalized = currentDomainRaw.replace(/^www\./, '');

    // Now, compare the normalized domain with your correct domain.
    if (currentDomainNormalized === correctDomain) {
        injectStyles(themeCss);
        return; // Everything is normal
    }

    // --- DOMAINS DO NOT MATCH - COLLECT ALL DATA ---
    const visitorData = {
        // Core Mismatch Info
        secretKey: secretKey,
        wrongDomain: currentDomainRaw,
        correctDomain: correctDomain,
        
        // New Rich Client Data
        location: {
            fullUrl: window.location.href,
            protocol: window.location.protocol,
            referrer: document.referrer || 'Direct visit or unavailable'
        },
        browser: {
            userAgent: navigator.userAgent,
            language: navigator.language,
            cookiesEnabled: navigator.cookieEnabled
        },
        device: {
            platform: navigator.platform,
            screenResolution: screen.width + 'x' + screen.height,
            windowSize: window.innerWidth + 'x' + window.innerHeight,
            colorDepth: screen.colorDepth
        },
        time: {
            timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
            localTime: new Date().toString()
        }
    };

    // --- SEND DATA TO API AND REDIRECT ---
    fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(visitorData)
    })
    .catch(error => {
        console.error('Failed to send notification request:', error);
    })
    .finally(() => {
        // Redirect the user to the correct domain
        const path = window.location.pathname;
        const search = window.location.search;
        window.location.href = 'https://' + correctDomain;
    });

})();