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
let validationmessage=document.querySelectorAll('#validationmessage')
let vms=document.querySelectorAll('#vms')
let closevalidationmessage=document.querySelectorAll("#closevalidationmessage")

let shownoassignmessage=()=>{
   if( allassign.childElementCount==0)
   {
    noassign.classList.remove('hide')
   }
}

for (let i = 0; i < validationmessage.length; i++) {
    closevalidationmessage[i].addEventListener('click', function () {
        validationmessage[i].classList.add('hide');
    })
  }
let addassign=()=>{
    let assignname=inputassign[0].value
    let assigndate=inputassign[1].value
    let name=inputassign[2].value
    let url=inputassign[3].value

    if(assignname.trim()=="" ||assignname.length<3||assignname.length>20)
    {
        inputassign[0].classList.add('red')
        validationmessage[0].classList.remove('hide')
       
     if(assignname.trim()==""){
        vms[0].innerHTML="please enter data"
        
     }
     else if(assignname.length<3){
        vms[0].innerHTML="please enter data more than 3 char"
        
     }
     else if(assignname.length>20){
        vms[0].innerHTML="please enter data less than 20 char"
       
     }
    }
    if(assigndate.trim()=="" ||assigndate.length<3||assigndate.length>20)
    {
        inputassign[1].classList.add('red')
        validationmessage[1].classList.remove('hide')
       
     if(assigndate.trim()==""){
        vms[1].innerHTML="please enter data"
     }
     else if(assigndate.length<3){
        vms[1].innerHTML="please enter data more than 3 char"
     }
     else if(assigndate.length>20){
        vms[1].innerHTML="please enter data less than 20 char"
     }
    }
    if(name.trim()=="" ||name.length<3||name.length>20)
    {
        inputassign[2].classList.add('red')
        validationmessage[2].classList.remove('hide')
       
     if(name.trim()==""){
        vms[2].innerHTML="please enter data"
        
     }
     else if(name.length<3){
        vms[2].innerHTML="please enter data more than 3 char"
        
     }
     else if(name.length>20){
        vms[2].innerHTML="please enter data less than 20 char"
       
     }
    }
    if(url.trim()=="" ||url.length<3)
    {
        inputassign[3].classList.add('red')
        validationmessage[3].classList.remove('hide')
       
     if(url.trim()==""){
        vms[3].innerHTML="please enter data"
        
     }
     else if(url.length<3){
        vms[3].innerHTML="please enter data more than 3 char"
        
     }
     
    }
    else{
        inputassign[0].classList.replace('red','green')
        for (let i = 0; i < validationmessage.length; i++) {
            validationmessage[i].classList.add('hide');
          }
    noassign.classList.add('hide')
    allassign.innerHTML+=`<div class=" task list ">
    ${assignname}:<img width="30px"height="20px" src="${url}">:${name}
    <i class=" delete fa-solid fa-trash"></i>
    <span class="float-right">
    ${assigndate}
    </span>
    <div>`
    inputassign[0].value=""
    inputassign[1].value=""
    inputassign[2].value=""
    inputassign[3].value=""
    allassign.addEventListener("click",function(e){
        if(e.target.classList.contains('task')){

        e.target.classList.toggle('checked')
        }
    })
}
}
assignbtn.addEventListener('click',addassign)
document.addEventListener('click',function(t){
    if(t.target.classList.contains('delete')){
        t.target.parentElement.remove()
        shownoassignmessage()
    }
})
//JQuery
$(document).ready(function(){
    $(window).scroll(function(){
        let scrollnumber=$(window).scrollTop()
        console.log(scrollnumber);
              if(scrollnumber>468){
                $(".goup").css("opacity","1")
           
              }
              else{
                $(".goup").css("opacity","0")
               
              }
    })

$(".home").slideDown(1000,function(){
    $('.form-group').eq(0).slideDown(1000,function(){
        $('.form-group').eq(1).slideDown(1000,function(){
            $('.form-group').eq(2).slideDown(1000,function(){
                $('.form-group').eq(3).slideDown(1000,function(){
                    $(".btn").slideDown(1000,function(){
                        $('h1').slideDown(1000)
                            
                        
                    })
                })
            })
        })
    })
})




})






