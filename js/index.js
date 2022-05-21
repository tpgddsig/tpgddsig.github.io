



window.addEventListener("load", function() {

    setTimeout(() =>{
        const darkMode = localStorage.getItem("dark-mode");


        if(darkMode != null)
        {
            if(darkMode === "true")
            {
                navbar.darkModeSwitch();
            }
        }
    }, 10)
    
});
