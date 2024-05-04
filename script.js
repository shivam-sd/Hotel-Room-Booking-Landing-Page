let slider = document.getElementById("slider");
let image = document.querySelectorAll("#img");
let arrowLeft = document.getElementById("arrow-left");
let arrowRight = document.getElementById("arrow-right");

let slideNumber = 1;

arrowRight.addEventListener("click",() => {
    if(slideNumber < image.length){
        slider.style.transform = `translateX(-${slideNumber*800}px)`;
        slideNumber += slideNumber; 
    }
    else{
        slider.style.transform = `translateX(0px)`;
        slideNumber = 1;
    }
});

arrowLeft.addEventListener("click",() => {
    if(slideNumber > 1){
        slider.style.transform = `translateX(-${(slideNumber -2)*800}px)`;
        slideNumber -- ;
    }
    else{
        slider.style.transform = `translateX(-${(image.length -1)*600}px)`;
        slideNumber = image.length;
    }
})


let btn = document.getElementById("Change");
let show = document.getElementById("search-mode")
let Mode = "light";
let body = document.querySelector("body");


function changeMode(){
btn.addEventListener("click",() => {
    if(Mode === "light"){
        Mode = "dark";
        body.style.transition = '0.4s ease ';
        // body.style.zIndex = '1';
        body.classList.add("dark");
        body.classList.remove("light");
        show.value = `${Mode}`;
    }
    else{
        Mode = "light";
        body.style.transition = '0.4s ease ';
        // body.style.zIndex = '1';
        show.value = `${Mode}`;
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(Mode);
})
}

changeMode();
