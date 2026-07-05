let gameSeq = [];
let userSeq = [];
let btns =["yellow","red","green","purple"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");


document.addEventListener("keypress", function(){
    if(started == false){
        started = true;
        levelUp();
    }
})

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    
    //random flash
    let random_index= Math.floor(Math.random()*4);
    let randomColor= btns[random_index];
    let randbtn = document.querySelector(`.${randomColor}`);
    gameSeq.push(randomColor);

    gameFlash(randbtn);
}

function checkAns(idx){
    // let idx = level -1;
    if(gameSeq[idx] === userSeq[idx])
    {
        if(gameSeq.length ==  userSeq.length){
            setTimeout(levelUp() , 1000);
        }

    }else{
        h2.innerHTML = `Game Over ! Your score is <b> ${level} <b> Press any to START`;
        document.querySelector("body").style.backgroundColor= "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },200);
        reset();
    }
}

function reset(){
    started =false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash")
    },450);
}
function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
        btn.classList.remove("userFlash")
    },450);
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);

    checkAns(userSeq.length -1);
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}