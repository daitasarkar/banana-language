/**var username=prompt("Enter username");
welcome="script is working "+username;
alert(welcome);**/

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

// to write text outputDiv.innerText="daita";

function clickEventHandler()
{
    //console.log("clicked");
    //console.log("input",txtInput.value);
    outputDiv.innerText="sjsjsjsj "+ txtInput.value;
};

btnTranslate.addEventListener("click",clickEventHandler);