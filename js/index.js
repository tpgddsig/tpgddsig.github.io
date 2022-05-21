window.onload = OnPageLoad;

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

function OnPageLoad(){
    setTimeout(() =>{
        OnBodyLoad()
    }, 10)
}