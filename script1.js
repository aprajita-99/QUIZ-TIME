
localStorage.setItem("currscore",0);
localStorage.setItem("HScore",0);
if(localStorage.Hscore>0){
    document.querySelector(".highest-score").innerText= `Highest Score:${localStorage.Hscore}/15`;
}
else{
    document.querySelector(".highest-score").innerText="";
}