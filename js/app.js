let spanner =document.querySelector('.spanner')
window.onload=function(){
    spanner.style.opacity="0"
    spanner.remove()
}
let button=document.querySelector(".home form i")
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
let input =document.querySelectorAll("input")
let h2 =document.querySelector("h2")
let btn2=document.querySelector(".home form button")
btn2.onclick=function(){
    
    h2.textContent=input[0].value
}






