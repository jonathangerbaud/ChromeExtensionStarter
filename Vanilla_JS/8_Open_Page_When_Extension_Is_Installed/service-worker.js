// Background scripts can't use XMLHttpRequest
// You can use fetch() instead

console.log("service worker");

// Listener for when chrome is installed/updated
chrome.runtime.onInstalled.addListener((reason) =>
{
    console.log("on installed", reason);
    if (reason.reason === chrome.runtime.OnInstalledReason.INSTALL)
        openDemoTab();
});

// If you want that a click on the extension icon opens the welcome page
chrome.action.onClicked.addListener(openDemoTab);

// Open welcome page in a new tab
function openDemoTab()
{
    console.log("open tab");
    chrome.tabs.create({ url: 'index/index.html' });
}