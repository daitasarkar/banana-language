/**var username=prompt("Enter username");
welcome="script is working "+username;
alert(welcome);**/

var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");

//var serverURL="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"
var serverURL="https://api.funtranslations.com/translate/minion.json"

function getTranslationURL(text){
   return  serverURL+ "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured "+ error);
    alert("something wrong with error. try again after sometime");
}

// to write text outputDiv.innerText="daita";

function clickHandler()
{
    //console.log("clicked");
    //console.log("input",txtInput.value);
    //outputDiv.innerText="sjsjsjsj "+ txtInput.value;
    var inputText=txtInput.value;//taking input

    //calling function for url
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        //.then(json => console.log(json))
        //.then(json => console.log(json.contents.translated))
        //put in output box
        .then(json =>{
            var translatedText=json.contents.translated;
            outputDiv.innerText=translatedText;
        })
        .catch(errorHandler);
};

btnTranslate.addEventListener("click",clickHandler);