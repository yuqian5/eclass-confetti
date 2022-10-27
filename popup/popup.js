window.onload = function () {
    // get browser
    let browser = getBrowser();

    // src-btn listener
    document.getElementById("src-btn").addEventListener("click", function () {
        chrome.tabs.create({url: "https://github.com/yuqian5/eclass-confetti"});
    });

    // for chrome, open link in new tab
    if (browser === "chrome") {
        window.addEventListener('click', function (e) {
            if (e.target.href !== undefined) {
                chrome.tabs.create({url: e.target.href})
            }
        })
    }
}

/**
 * Get user browser name
 * @returns {string} browser name
 */
function getBrowser() {
    let userAgent = navigator.userAgent;

    if (userAgent.match(/chrome|chromium|crios/i)) {
        return "chrome";
    } else if (userAgent.match(/firefox|fxios/i)) {
        return "firefox";
    } else if (userAgent.match(/safari/i)) {
        return "safari";
    } else if (userAgent.match(/opr\//i)) {
        return "opera";
    } else if (userAgent.match(/edg/i)) {
        return "edge";
    } else {
        return "unknown";
    }
}
