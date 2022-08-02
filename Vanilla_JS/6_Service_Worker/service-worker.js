// This is a very basic example of a service worker

// We listen to the alarm
chrome.alarms.onAlarm.addListener(function (alarm)
{
    // If it matches our alarm name, then log the message
    if (alarm.name === "log")
        console.log("The alarm is ringing!");
})



// Here we start by creating an alarm that will fire every minutes
chrome.alarms.create("log", {
    when: Date.now() + 10, // Now + 10 ms
    periodInMinutes: 1
})


// We could have used this method to periodically fetch data from example, 
// or to send a message to a content script
// or to automatically save some kind of data

// You can use the service worker for anything background related
// You can find more example in the next projects