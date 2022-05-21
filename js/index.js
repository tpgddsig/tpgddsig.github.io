function OnBodyLoad()
{
    const darkMode = localStorage.getItem("dark-mode");

    
    if(darkMode != null)
    {
        if(darkMode === "true")
        {
            navbar.darkModeSwitch();
        }
    }
}