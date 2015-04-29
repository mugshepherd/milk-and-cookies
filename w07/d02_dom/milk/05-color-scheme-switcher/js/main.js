document.querySelector("#switcher").addEventListener("click", function( event ){
        console.log( event.target.classNames )
  document.body.className = event.target.className
})




// var colorId = ["one", "two", "three", "four"]
// var colors = ["red", "white", "blue", "yellow"]
// var button = document.querySelector([])
//
// var redButton = document.querySelector(".one")
// redButton.addEventListener("click", changeRed)
//
// function changeRed(){
//   document.body.style.backgroundColor = "red"
//   document.body.style.color = "white"
// }
//
// var whiteButton = document.querySelector(".two")
// whiteButton.addEventListener("click", changeWhite)
//
// function changeWhite(){
//   document.body.style.backgroundColor = "white"
//   document.body.style.color = "black"
// }
//
// var blueButton = document.querySelector(".three")
// blueButton.addEventListener("click", changeBlue)
//
// function changeBlue(){
//   document.body.style.backgroundColor = "blue"
//   document.body.style.color = "white"
// }
//
// var yelloButton = document.querySelector(".four")
// yellowButton.addEventListener("click", changeYellow)
//
// function changeYellow(){
//   document.body.style.backgroundColor = "yellow"
//   document.body.style.color = "black"
// }
