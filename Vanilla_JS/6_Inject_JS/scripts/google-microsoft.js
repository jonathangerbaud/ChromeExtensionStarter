console.log("hello chrome extension starter script");

var div = document.createElement("div");
div.style = "background-color: #00000099; position: fixed; top: 0; left: 0; z-index: 100000; display: flex; align-items: center; place-content: center; width: 100vw; height: 100vh";

let content = document.createElement("div");
content.style = "background-color: #334155; color: #ffffff; text-align: center; padding: 30px; display: flex; flex-direction: column; place-content: center; width: 600px; height: 400px;";

let title = document.createElement("div");

let img = document.createElement("img");
img.width = 96;
img.height = 96;
img.src = chrome.runtime.getURL("/icons/icon128.png");

let h1 = document.createElement("h1");
h1.style = "color: #ffffff; font-size: 20pt; margin-top: 10px; margin-bottom: 20px";
h1.innerHTML = "Inject JS Page Sample";

title.appendChild(img);
title.appendChild(h1);

let p1 = document.createElement("p");
let p2 = document.createElement("p");
p1.innerHTML = "The extension used an injected script on Google and Microsoft pages to add some HTML.";
p2.innerHTML = "You can of course modify the code of this script (<code>scripts/script.fb</code>)";

let closeButton = document.createElement("img");
closeButton.style = "position: absolute; top : calc(50% - 230px + 10px); left: calc(50% + 330px - 32px - 10px); cursor: pointer";
closeButton.width = 32;
closeButton.height = 32;
closeButton.src = chrome.runtime.getURL("/images/close.png");
closeButton.onclick = function () { document.body.removeChild(div); };

content.appendChild(closeButton);
content.appendChild(title);
content.appendChild(p1);
content.appendChild(p2);

div.appendChild(content);

document.body.appendChild(div);