// Here is the class that will manage the different types of 
// messages you can send to the background script (service worker)

// This class centralizes all the possible calls and format the messages
// sent to the background script. This will avoid making errors

// If you prefer to decentralize for any reason, you can either directly use the sendMessage 
// function at the end of this file (make sure to export it by adding "export" in front of 
// its declaration) or create multiple MessageManager classes (like for example 
// Script1MessageManager, Script2MessageManager, UserSessionMessageManager, etc...)



// You can of course add your own methods to implement your use-cases
class MessageManager
{
    /**
     * Inject a JS script in the current web page
     */
    injectJS()
    {
        sendMessage("injectJS");
    }

    /**
     * Inject a CSS file in the current web page
     */
    injectCSS()
    {
        sendMessage("injectCSS");

    }

    /**
     * Save user to local storage
     * 
     * @param user the user object
     * @param onUserSavedCallback callback function with no parameter, called when user has been saved to local storage
     */
    saveUser(user, onUserSavedCallback)
    {
        sendMessage("saveUser", user, onUserSavedCallback);
    }

    /**
     * Retrieve the user from local storage
     * 
     * @param {object} user 
     * @param {function} callbackFn callack function containing the user obect as parameter
     */
    getUser(callbackFn)
    {
        sendMessage("getUser", null, callbackFn);
    }
}

/**
 * Private method
 * 
 * @param {*} type Type of message
 * @param {*} data Data object for this message
 * @param {*} callback Callback function when background script (service worker) finished processing this message
 */
function sendMessage(type, data = null, callback = null)
{
    chrome.runtime.sendMessage({ type, data }, callback);
}