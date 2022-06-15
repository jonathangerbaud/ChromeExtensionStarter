
// We add a listener for when the user click on the extension's icon
chrome.action.onClicked.addListener(function(tab) {
    // The user clicked on the extension's icon,
    // Now we open a new tab with our fullscreen page
    // Here, we open index/index.html from this folder
    chrome.tabs.create({ url: 'index/index.html' });
});