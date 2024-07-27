//select popup box , popup overlay , popup button

var addbtn=document.querySelector("#add-popupbtn")
var overlay=document.querySelector(".popup-overlay")
var popup=document.querySelector(".popup-box")

addbtn.addEventListener("click",function(){
    overlay.style.display="block"
    popup.style.display="block"
})

//select cancel button

var cancelbtn=document.querySelector("#cancel-popup")
var addbtn=document.querySelector("#")

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
addbtn.addEventListener("click",function(event){
    event.preventDefault()
})
})