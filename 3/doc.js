var $=document;

const menuBurger=$.querySelector(".menu-burger");
const list=$.querySelector(".list");

let bool=true;

menuBurger.addEventListener("click",()=>{
    if(bool===true){
        list.classList.add("open");
        bool=false;
    }
    else{
        list.classList.remove("open");
        bool=true;
    }
})