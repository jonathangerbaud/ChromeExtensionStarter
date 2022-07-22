class RequestProxy 
{
    constructor() 
    {

    }

    get(url, data, callback)
    {
        this.send(url, 'GET', data, callback);
    }

    post(url, data, callback)
    {
        this.send(url, 'POST', data, callback);
    }

    put(url, data, callback)
    {
        this.send(url, 'PUT', data, callback);
    }

    send(url, method, data, callback)
    {
        chrome.runtime.sendMessage({ type: 'sendRequest', method: method, url: url, data: data }, function (response)
        {
            callback(response);
        });
    }
}