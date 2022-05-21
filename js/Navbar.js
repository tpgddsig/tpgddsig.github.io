var navbar = {};

navbar.darkModeSwitch = function (){
    const icon = document.getElementById("theme-toggle-icon");
    const logo = document.getElementById("gdd-logo");
    
    console.log(icon);
    console.log(logo);
    
    document.body.classList.toggle("dark-mode");
    
    let isDarkMode;
    
    if(document.body.classList.contains("dark-mode")){

        icon.src = "./Images/light_on.svg";
        logo.src = "./Images/sig_logo_dark.svg";

        isDarkMode = true;
    }
    else{
        icon.src = "./Images/light_off.svg";
        logo.src = "./Images/sig_logo_light.svg";

        isDarkMode = false;
    }


    localStorage.setItem("dark-mode", isDarkMode);
}

function FollowLink(pageUrl)
{
    console.log("HI!");
    jQuery.ajax({
        url: pageUrl,
        type: "GET",
        dataType: 'html',
        success: function(response){
            document.getElementsByTagName('html')[0].innerHTML = response
        }
    });
}