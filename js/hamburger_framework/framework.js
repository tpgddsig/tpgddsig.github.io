

function OpenMenu()
{
    const navbarBody = document.getElementById("navbarSupportedContent");

    console.log(navbarBody);
    
    if(navbarBody.style.display != "inline-block")
    {
        navbarBody.style.display = "inline-block";

     
    }
    else
    {
        navbarBody.style.display = "none";
    }
   
    
}