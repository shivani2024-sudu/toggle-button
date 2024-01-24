let button = document.querySelector(".button");
let body = document.querySelector("body");
let currentMode = "light";


button.addEventListener('click',()=>{
    if(currentMode === "light"){
      currentMode = "dark";
      document.querySelector("body").style.backgroundColor="black";
    } else{
        
            currentMode = "light";
            document.querySelector("body").style.backgroundColor="white";
        }
        console.log(currentMode);

    }
    
);