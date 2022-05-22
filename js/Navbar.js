var navbar = {};

navbar.darkModeSwitch = function (){
    
    document.documentElement.classList.toggle("dark-mode");
    
    
    let isDarkMode = false;
    
    if(document.documentElement.classList.contains("dark-mode"))
        isDarkMode = true;
    
    

    localStorage.setItem("dark-mode", isDarkMode.toString());
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
