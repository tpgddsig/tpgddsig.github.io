
function DeveloperMouseOver(id)
{




    console.log(id.children[0]);

    id.children[1].classList.add("developer-card-blur");

    id.children[0].style.display = "inline-block";

}

function DeveloperMouseDown(id)
{


    id.children[1].classList.remove("developer-card-blur");
    id.children[0].style.display = "none";

}