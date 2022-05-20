

function OnBodyLoad()
{
    const darkMode = localStorage.getItem("dark-mode");
    
    console.log(darkMode === true);
    
    if(darkMode != null)
    {
        if(darkMode == "true")
        {
            navbar.darkModeSwitch();
            console.log("ya");
        }
    }
}