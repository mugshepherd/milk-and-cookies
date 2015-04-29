Logo Hijack
Open up www.google.com in Chrome or Firefox, and open up the console.
Find the Google logo and store it in a variable.
Modify the source of the logo IMG so that it's a Yahoo logo instead.
Find the Google search button and store it in a variable.
Modify the text of the button so that it says "Yahooo!" instead.



document.getElementById("hplogo").src="http://fc06.deviantart.net/fs70/f/2010/140/a/9/Yahoo_Button_by_thisismyaccountokay.png";

document.querySelector("img#hplogo").src="http://fc06.deviantart.net/fs70/f/2010/140/a/9/Yahoo_Button_by_thisismyaccountokay.png";


var image = document.querySelector("img#hplogo");

image.src = "http://fc06.deviantart.net/fs70/f/2010/140/a/9/Yahoo_Button_by_thisismyaccountokay.png";


var googleLogo = doument.querySelector("#hplogo")
googleLogo.setAttribute("src","http://fc06.deviantart.net/fs70/f/2010/140/a/9/Yahoo_Button_by_thisismyaccountokay.png")


//replace text of button
var button = document.querySelector("[name='btnK']")
//or document.querySelector(".jsb input"), etc.
//doesn't want to rely on type=submit because too general

button.value = "Hooli Search"


///changing gmail

document.querySelector(".gb_m .gb_l[data-pid='23']")



var link = document.querySelector("a");

link.addEventListener('click', fucntion(){
function( event ){
event.preventDefault();
  sayHi()
  sayBye()
}
})
link.addEventListener("click", sayHi)
link.addEventListener(click", sayBye)

function sayHi(){
alert("hello!")
}

function sayBye(){
alerts
}
}
