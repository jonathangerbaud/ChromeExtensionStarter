// JS for index.html
function refreshUser(event)
{
    getUser()
}

function getUser()
{
    new MessageManager().getUser
    (
        function (user) 
        {
            // Update current user
            document.getElementById("username").textContent = user.firstname + " " + user.lastname;

            // Update form (for when page first loads)
            document.getElementById("firstname").setAttribute("value", user.firstname)
            document.getElementById("lastname").setAttribute("value", user.lastname)
        }
    );
}

function saveUser(event)
{
    event.preventDefault(); // Prevent reloading page

    // Ask MessageManager to save user
    new MessageManager().saveUser
    (
        // Retrieve user details from form inputs and pass the data as 1st parameter
        { 
            firstname: event.target.firstname.value, 
            lastname: event.target.lastname.value
        },
        function()
        {
            // User us saved, if checkbox for autorefresh is ticked
            // Retrieve user to update it
            if (document.getElementById("autorefresh").checked)
                getUser();
        }
    );
}

// Add click event listeners on the button
// You are not allowed to do <button onClick="insertCSS"> in the HTML code
// because this is a security violation
document.getElementById("getUserButton").addEventListener("click", refreshUser);
document.getElementById("form").addEventListener("submit", saveUser);

getUser();