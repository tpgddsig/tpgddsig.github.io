var navbar = {};

navbar.darkModeSwitch = function (){
    var icon = document.getElementById("theme-toggle-icon");
    
    document.body.classList.toggle("dark-mode");

    console.log(document.body.classList);
   
    
    if(document.body.classList.contains("dark-mode")){
        icon.src = "./Images/sun.png";
    }
    else{
        icon.src = "./Images/moon.png";
    }
}
