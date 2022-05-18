var navbar = {};

navbar.darkModeSwitch = function (){
    var icon = document.getElementById("theme-toggle-icon");
    console.log("hi!");
    document.body.classList.toggle("dark-mode");
    
    if(document.body.classList.contains("dark-mode")){
        icon.src = "images/sun.png";
    }
    else{
        icon.src = "images/moon.png";
    }
}