let spanner =document.querySelector('.spanner')
window.onload=function(){
    spanner.style.opacity="0"
    spanner.remove()
}
let button=document.querySelector(".home .fa-moon")
let body=document.querySelector("body")
button.onclick=function(){
if(body.classList.contains("dark"))
{
   
    body.classList.remove('dark')
    button.style.color="black"
}
else
{
body.classList.add('dark')
button.style.color="white"
}
}
let bigimage=document.querySelector(".gallery .bigimage img")
let image=document.querySelectorAll(".gallery .images img")
for(let i=0 ;i<image.length;i++){
image[i].onclick=function(){
    let oldsrc=bigimage.src
    bigimage.src=image[i].src
     image[i].src= oldsrc
}
}
let btn=document.querySelectorAll('.ALLACC .accourdion button')
let item=document.querySelectorAll('.ALLACC .accourdion .item')
let icon=document.querySelectorAll('.ALLACC .accourdion i')
for(let i=0;i<item.length;i++){
btn[i].onclick=function(){
    if(item[i].style.height==0)
    {
        item[i].style.height=item[i].scrollHeight+"px"
        icon[i].style.transform="rotate(180deg)"
    }
    else{
        item[i].style.height=null
        icon[i].style.transform="rotate(360deg)"
    }
    }
}
 
let inputassign =document.querySelectorAll('#inputassign')
let assignbtn =document.getElementById('assignbtn')
let noassign=document.getElementById('noassign')
let allassign=document.getElementById('allassign')
let validationmessage=document.getElementById('validationmessage')
let vms=document.getElementById('vms')
let closevalidationmessage=document.getElementById("closevalidationmessage")

let shownoassignmessage=()=>{
   if( allassign.childElementCount==0)
   {
    noassign.classList.remove('hide')
   }
}
let removevalidationmessage=()=>{
    validationmessage.classList.add('hide')
}
let addassign=()=>{
    let assignvalue=inputassign[0].value
    if(assignvalue.trim()=="" ||assignvalue.length<3||assignvalue.length>20)
    {
        inputassign[0].classList.add('red')
        validationmessage.classList.remove('hide')
       
     if(assignvalue.trim()==""){
        vms.innerHTML="please enter data"
     }
     else if(assignvalue.length<3){
        vms.innerHTML="please enter data more than 3 char"
     }
     else if(assignvalue.length>20){
        vms.innerHTML="please enter data less than 20 char"
     }
    }
    else{
        inputassign[0].classList.replace('red','green')
        removevalidationmessage()
    noassign.classList.add('hide')
    allassign.innerHTML+=`<div class=" task list ">${assignvalue}
    <i class=" delete fa-solid fa-trash"></i>
    <div>`
    inputassign[0].value=""
    allassign.addEventListener("click",function(e){
        if(e.target.classList.contains('task')){

        e.target.classList.toggle('checked')
        }
    })
}
}
assignbtn.addEventListener('click',addassign)
closevalidationmessage.addEventListener("click",removevalidationmessage)
document.addEventListener('click',function(t){
    if(t.target.classList.contains('delete')){
        t.target.parentElement.remove()
        shownoassignmessage()
    }
})






