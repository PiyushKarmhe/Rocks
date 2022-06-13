console.log("Welcome to the Rocks By Piyush Karmhe")
var comp_p = 0;
var user_p = 0;
const user_r = document.querySelector("#user");
const comp_r = document.querySelector("#comp");
const display = document.querySelector("#result");
const user_s = document.querySelector(".user");
const comp_s = document.querySelector(".comp");
const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissor = document.querySelector("#Scissor");
const reset = document.querySelector("#reset");

const choices = ["Rock","Paper","Scissor"];

const computerResponse = ()=>{
    const index = (Math.random()*10).toFixed(0)%3;
    // console.log(choices[index]);
    return choices[index]
}

const result = (winner)=>{
    if(winner==="Comp"){
        ++comp_p;
        console.log("Comp win!!");
        display.innerHTML = "Comp Wins!!";
    }
    else {
        ++user_p;
        console.log("User win!!")
        display.innerHTML = "User Wins!!";
    }
    user_s.innerHTML = user_p;
    comp_s.innerHTML = comp_p;
}

const play = (user)=>{
    const comp = computerResponse();
    console.log("U: ",user," C: ",comp)
    user_r.innerHTML = "\""+user+"\"";
    comp_r.innerHTML = "\""+comp+"\"";
    if(user === comp) {
        display.innerHTML = "Tie!!";
        return console.log("Tie");
    }
    switch(user){
        case "Rock":
            if(comp==="Paper") result("Comp");
            else result("User");
            break;
        case "Paper":
            if(comp==="Scissor") result("Comp");
            else result("User");
            break;
        case "Scissor":
            if(comp==="Rock") result("Comp");
            else result("User");
            break;
        default : window.alert("Waah!! Guru!!!");
                  break;
    }
}

const reseting = ()=>{
    user_r.innerHTML = "\"\"";
    comp_r.innerHTML = "\"\"";
    display.innerHTML = "";
    comp_p = 0;
    user_p = 0;
    user_s.innerHTML = user_p;
    comp_s.innerHTML = comp_p;
}

rock.addEventListener("click",(e)=>play(e.target.id));
paper.addEventListener("click",(e)=>play(e.target.id));
scissor.addEventListener("click",(e)=>play(e.target.id));
reset.addEventListener("click",reseting);
