var navbar = {};

navbar.darkModeSwitch = function (){
    var icon = document.getElementById("theme-toggle-icon");
    
    document.body.classList.toggle("dark-mode");

    
    var isDarkMode;

   
    
    if(document.body.classList.contains("dark-mode")){
        icon.src = "./Images/light_on.svg";

        isDarkMode = true;
    }
    else{
        icon.src = "./Images/light_off.svg";

        isDarkMode = false;
    }


    localStorage.setItem("dark-mode", isDarkMode);
}
