function insertCSS(event)
{
    // Disable the button
    event.target.setAttribute("disabled", "");

    new MessageManager().injectCSS();
}

function insertJS(event)
{
    // Disable the button
    event.target.setAttribute("disabled", "");

    new MessageManager().injectJS();
}

const container = document.createElement("div")
container.setAttribute("id", "cer-container");

const injectCssButton = document.createElement("button");
injectCssButton.innerHTML = "Inject CSS";
injectCssButton.addEventListener("click", insertCSS);

const injectJsButton = document.createElement("button");
injectJsButton.innerHTML = "Inject JS";
injectJsButton.addEventListener("click", insertJS);

container.appendChild(injectCssButton);
container.appendChild(injectJsButton);

document.body.appendChild(container);