

let quesno = document.querySelector(".ques-count p span");
localStorage.setItem("quesno",quesno.innerText);
let score = localStorage.getItem("currscore");
let time = 30;
let timertext=document.querySelector(".timer p span");
let correct_option = document.querySelector(".correct");
let options = document.querySelector(".options");
let mytimer = setInterval(()=>{
    if(time==1){
    clearInterval(mytimer);};
    time--;
    if(time<10){
    timertext.innerText=`0${time}`;}
    else{
        timertext.innerText=time;
    }
    if(time==20){
        document.body.classList.add("twothird-time-rem");
    }
    if(time==10){
        document.body.classList.add("onethird-time-rem");
    }
    if(time==0){
        document.body.classList.add("out-of-time");
    }
    options.addEventListener('click',(e)=>{
        clearInterval(mytimer);
    })
},1000);

let remove_popup =document.querySelector(".time-out");
let next_link = document.querySelector(".next-button a");
remove_popup.addEventListener('click',()=>{
    document.body.classList.remove("out-of-time");
    next_link.click();
})


 options.addEventListener('click',(event)=>{
    let clicked_element = event.target.parentElement.parentElement;
    clicked_element.children[1].classList.remove("hideans");
    correct_option.children[1].classList.remove("hideans");
    if(clicked_element == correct_option){
      score++;
      }
    localStorage.setItem("currscore",score);
 },{once:true})

 document.querySelector(".credit").addEventListener('click',()=>{
    next_link.click();
 })


