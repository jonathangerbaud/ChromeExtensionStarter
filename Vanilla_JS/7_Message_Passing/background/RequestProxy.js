export default class RequestProxy 
{
    get(url, data, callback) 
    {
        this.send({ url: url, method: 'GET', data: data }, callback);
    }

    post(url, data, callback) 
    {
        this.send({ url: url, method: 'POST', data: data }, callback);
    }

    put(url, data, callback) 
    {
        this.send({ url: url, method: 'PUT', data: data }, callback);
    }

    delete(url, data, callback) 
    {
        this.send({ url: url, method: 'DELETE', data: data }, callback);
    }

    send(request, callback)
    {
        var xhr = new XMLHttpRequest();

        let method = request.method || 'GET';

        if (method === 'GET' && request.data)
        {
            // Transform data into url params
            request.url += '?';

            Object.keys(request.data).forEach((key, index) =>
            {
                let value = request.data[key];

                if (Array.isArray(value) || typeof value === "object")
                    value = JSON.stringify(value);

                request.url += key + '=' + value + '&';
            });
        }

        xhr.open(method, process.env.REACT_APP_SERVER_URL + '/' + request.url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');

        const auth = JSON.parse(localStorage.getItem('persist:tamojee-auth'));
        const token = auth.authToken.substr(1, auth.authToken.length - 2);
        xhr.setRequestHeader('Authorization', 'Bearer ' + token);

        xhr.onreadystatechange = function ()
        {
            if (this.readyState === 4)
                callback({ status: this.status, data: this.responseText, xhr: this });
        };

        xhr.send(request.data ? JSON.stringify(request.data) : request.data);
    }
}