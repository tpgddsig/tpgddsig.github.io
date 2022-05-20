

function OnBodyLoad()
{
    const darkMode = localStorage.getItem("dark-mode");
    
    console.log(darkMode);
    
    if(darkMode != null)
    {
        if(darkMode)
        {
            navbar.darkModeSwitch();
        }
    }
}