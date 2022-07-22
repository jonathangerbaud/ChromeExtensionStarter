console.log("hello new js")

function handleClick()
{
    alert("You clicked on a button created by a dynamically injected script!");
}

const injectedButton = document.createElement("button");
injectedButton.innerHTML = "Injected";
injectedButton.addEventListener("click", handleClick);

document.getElementById("cer-container").appendChild(injectedButton);