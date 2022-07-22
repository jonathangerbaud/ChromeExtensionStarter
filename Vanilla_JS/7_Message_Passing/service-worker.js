import RequestProxy from '/background/RequestProxy.js';

// We add a listener for when the user click on the extension's icon
chrome.action.onClicked.addListener(
    function (tab)
    {
        // The user clicked on the extension's icon,
        // Now we open a new tab with our fullscreen page
        // Here, we open index/index.html from this folder
        chrome.tabs.create({ url: 'index/index.html' });
    }
);

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) 
    {
        switch (request.type)
        {
            case "sendRequest":
            {
                // Content script want to send an HTTP request
                // Content cannot send HTTP Request, only service worker can
                // So we're using message passing so that content script
                // can send a HTTP request
                // We delegate this task to the RequestProxy class
                // (see background/RequestProxy.js)
                new RequestProxy().send(request, sendResponse);
                return true; // Indicate a background operation
            }
            case "injectJS":
            {
                // Content script wants to dynamically insert JS to the page
                // Maybe because user just logged in or because user chose an option
                // or because content script analyzed page and decided it was better
                // to insert scriptA.js rather than cssscriptB.js (this is just an imaginary
                // use-case scenario)

                // Here, we just insert JS dynamically to the webpage
                // It's very simple and only needs two parameters:
                // - The js file we want to insert in the code of the page
                // - The id of the tab we want to insert the code in. Here we
                //   use the id from the sender passed in paramter of the 
                //   message listener function, which is the tab of the content
                //   script asking the background worker to inject JS
                chrome.scripting.executeScript(
                    {
                        files: ['/scripts/dynamically-injected-script.js'],
                        target: { tabId: sender.tab.id },
                    }
                );

                sendResponse();
                break;
            }
            case "injectCSS":
            {
                // Content script wants to dynamically insert CSS to the page
                // Maybe because user just logged in or because user chose an option
                // or because content script analyzed page and decided it was better
                // to insert cssA.css rather than cssB.css (this is just an imaginary
                // use-case scenario)

                // Here, we just insert CSS dynamically to the webpage
                // It's very simple and only needs two parameters:
                // - The css file we want to insert in the code of the page
                // - The id of the tab we want to insert the code in. Here we
                //   use the id from the sender passed in paramter of the 
                //   message listener function, which is the tab of the content
                //   script asking the background worker to inject CSS
                chrome.scripting.insertCSS(
                    {
                        target: { tabId: sender.tab.id },
                        // files: ['/css/dynamically-injected-css.css'],
                        css: "body { background-color: red !important; }"
                    }
                );

                sendResponse();
                break;
            }
            case "saveUser":
            {
                saveUser(request.data, sendResponse);
                return true; // Indicate a background operation
            }
            case "getUser":
            {
                getUser(sendResponse);
                return true; // Indicate a background operation
            }
        }
    }
);


const USER_KEY = "CHROME-EXT-STARTER:user";

// Declare functions to manage user here if you need
// to save or retrieve the current user from this background worker
// in other methods (like event listeners for example)
function saveUser(user, callback)
{
    /*
        We are using the chrome.storage.local api here, for the sake of example

        But you can also save the user the chrome.storage.sync api (you 
        can access this api directly from the content scripts, 
        no need for message passing then)

        Or your can save it to your server via an api call

        It's up to you to decide how you want to manage your data

        Note than you cannot use the window.localStorage api in a 
        service worker
    */
    return chrome.storage.local.set({ [USER_KEY]: user }).then(callback);
    // Of course, you should make sure that the user passed in parameter
    // is valid before saving it
}

function getUser(callback)
{
    // This function takes an array of keys as 1st parameters
    // Here we just need to retrieve the data from one key
    chrome.storage.local.get([USER_KEY], function (data)
    {
        // The resulting data parameter is an object containing the keys
        // passed as 1st parameter in chrome.storage.local.get()
        // Here, we are retrieving the data from the key we want
        const user = data[USER_KEY];

        // returns the user if present in storage, or a default one if none exists
        callback(user ? user : { firstname: "John", lastname: "Smith" });
    });
}