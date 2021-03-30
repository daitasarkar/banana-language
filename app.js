/**var username=prompt("Enter username");
welcome="script is working "+username;
alert(welcome);**/

var btnTranslate=document.querySelector("#btn-translate");

function clickEventHandler()
{
    console.log("clicked");
};

btnTranslate.addEventListener("click",clickEventHandler);