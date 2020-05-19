const tagSearch = document.querySelectorAll('article.first');
console.log(tagSearch);

for(var i = 0; i < tagSearch.length; i++){
    const h1Search = tagSearch[i].querySelectorAll('h1');
    console.log(h1Search.length);
}

//DOM

//DOM_1.2

//Zadanie 1
var element1 = document.getElementsByClassName("title");
function getDataAnimation(element1) {
    var element2 = one.getAttribute("data-animation");
    return element2;
    console.log(element2);
}

//Zadanie 2 
var home = document.getElementById("home");
// var element3v2 = document.querySelector("#home");
console.log(home);
var elementli = document.querySelector("li").getAttribute("data-direction");
console.log(elementli);
var block = document.querySelector(".block");
console.log(block);

//Zadanie 4
var tag = document.querySelectorAll("article.first");
var h1 = document.querySelectorAll("article.first h1");
console.log(tag);
console.log(h1);

//DOM_1.3

//Zadanie 1
var links = document.getElementsByTagName("li")
function getDatasInfo(elements){
    var table = []
    for(var i=0;i<elements.length;i++){
        table.push(elements[i].dataset)
    }
    console.log(table)
}
getDatasInfo(links)

//Zadanie 3
var blocks = document.querySelector(".blocks");
console.log(blocks.innerHTML);
console.log(blocks.outerHTML);
blocks.innerHTML = "Nowa wartość diva o klasie blocks";
