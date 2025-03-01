var btn = document.querySelector("button");
var h1 = document.querySelector("h1");

var img1 = document.querySelector("#img1");
var img2 = document.querySelector("#img2");
var swapBtn =document.querySelector("#swap");

var form = document.querySelector("form");
var h4 = document.querySelector("h4");
var inps = document.querySelectorAll('input[type="text"]');

var ul = document.querySelector("ul");
var add = document.querySelector("#add");
var remove = document.querySelector("#remove");
var inp2 = document.querySelector('#inp2');

var counter = document.querySelector("#counter");
var start = document.querySelector("#start");
var stop = document.querySelector("#stop");

var tabs = document.querySelectorAll(".tab");
var texts = document.querySelectorAll(".text");

var prg = document.querySelector("#progress");
var dwnld = document.querySelector("#center h4");


btn.addEventListener("click", function(){
    h1.textContent = "started";
    btn.style.backgroundColor='green'
})

swapBtn.addEventListener("click", function(){
    var temp = img1.src;
    img1.src=img2.src;
    img2.src=temp;
})


form.addEventListener("submit" , function(event){
    event.preventDefault();
    for(var i = 0; i< inps.length; i++){
        if(inps[i].value.trim() === '') {
            h4.textContent="Error, some fields are blank";
            h4.style.color="red";
            break;
        }
        else{
            h4.textContent="";
            h4.style.color="black";
        }
    }
})

var li;
add.addEventListener("click", function(){
    if(inp2.value.trim() === ''){}
    else{
    li=document.createElement("li");
    li.textContent = inp2.value.trim();
    ul.appendChild(li);
    inp2.value = "";
    }
})
remove.addEventListener("click", function(){
    ul.removeChild(li);
})

var int;
start.addEventListener("click", function(){
    var count = 0;
    int = setInterval(function(){
        counter.textContent = count++;
    }, 100)
})

stop.addEventListener("click", function(){
    clearInterval(int);
})

tabs.forEach(function(tab, i){
    tab.addEventListener("click" , function(){
        hideAllText();
        texts[i].style.display = "block";
    });
});

function hideAllText(){
    texts.forEach(function(text){
        text.style.display = "none";
    });
}

var count=0;
var int = setInterval(function(){
    if(count==100){
        dwnld.style.opacity = "1";
        clearInterval(int);
    }
    count++;
    prg.style.width = count+"%";
},50)