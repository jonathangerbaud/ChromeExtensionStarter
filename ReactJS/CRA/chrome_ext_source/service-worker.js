// Background scripts can't use XMLHttpRequest
// You can use fetch() instead

console.log("service worker");

// Listener for when chrome is installed/updated
chrome.runtime.onInstalled.addListener((reason) =>
{
    console.log("on installed", reason);
    if (reason.reason === chrome.runtime.OnInstalledReason.INSTALL)
        openWelcomeTab();
});

// If you want that a click on the extension icon opens the welcome page
chrome.action.onClicked.addListener(openHomeTab);

// Open welcome page in a new tab
function openWelcomeTab()
{
    chrome.tabs.create({ url: 'welcome/welcome.html' });
}

// Open welcome page in a new tab
function openHomeTab()
{
    chrome.tabs.create({ url: 'index.html' });
}