

function OpenMenu()
{
    const navbarBody = document.getElementById("navbarSupportedContent");
    const menuIcon = document.getElementById("hamburger-nav-icon");

    console.log(navbarBody);
    
    let displayMode;
    
    
    if(navbarBody.style.display != "inline-block")
    {
        displayMode = "inline-block";
        
        

     
        
    }
    else
    {
        displayMode = "none";
    }
    

    menuIcon.classList.toggle("menu-open");
    

    navbarBody.style.display = displayMode;
   
    
}