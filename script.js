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

cancelbtn.addEventListener("click",function(event){
    event.preventDefault()
    overlay.style.display="none"
    popup.style.display="none"
})

//box,add-book,book-title-input,book-author-input,book-description-input

var box=document.querySelector(".box")
var addbook=document.querySelector("#add-book")
var booktitle=document.querySelector("#book-title-input")
var bookauthor=document.querySelector("#book-author-input")
var description=document.querySelector("#book-description-input")
var deletebtn=document.querySelector(".btn")

addbook.addEventListener("click",function(event){
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","book-box")
    div.innerHTML=`<h2>${booktitle.value}</h2>
        <h5>${bookauthor.value}</h5>
        <p>${description.value}</p>`
    box.append(div)
    overlay.style.display="none"
    popup.style.display="none"
})


function deletebook(event){
    event.target.parentElement.remove()
}