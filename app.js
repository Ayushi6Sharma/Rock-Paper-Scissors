let container=document.querySelector(".container");
let play=document.querySelector("[data-ns-test='play-game']");
let roundResult=document.querySelector("[data-ns-test='round-result']");
let computerChoose=document.querySelector("[data-ns-test='computer-choose']");
let computerPointsText=document.querySelector("[data-ns-test='computer-points']");
let usersPointsText=document.querySelector("[data-ns-test='user-points']");
let gameResult=document.querySelector("[data-ns-test='game-result']");
let rounds=document.querySelector("[data-ns-test='rounds-left']");
let gameInput=document.querySelector("[data-ns-test='game-number']");
window.computerChoose1=[0, 1, 2];

var roundLeft;
var  count;
var  usersPoints;
 var computerPoints;
play.addEventListener("click",playfn)
function playfn()
{  
    container.style.display="block";
    gameResult.style.display="none";
    let gameNumber=document.querySelector("[data-ns-test='game-number']").value;
    roundLeft=parseInt(gameNumber,10);
    rounds.innerText=roundLeft;

    count=0;
    usersPoints=0;
    computerPoints=0;

    usersPointsText.innerText="0";
    computerPointsText.innerText="0";
    gameResult.innerText="";
    roundResult.innerText="";
    computerChoose.innerText="";

    // if(gameNumber.trim()=="")
    // {
    //     return;
    // }
    // else{
        container.style.display="block";
    // }
}
    let options1=document.querySelector(".options1");
    
    options1.addEventListener("click",findOption)
        function findOption(e)
        {  
              roundLeft--;
    
                let computerValue=Math.floor(Math.random()*3);
                let arr=["ROCK", "PAPER", "SCISSORS"];
                rounds.innerText=roundLeft;
                for(let i=0;i<arr.length;i++)
                {
                    if(i==computerValue)
                    {
                        computerChoose.innerText=arr[i];
                    }
                }
                
                if(e.target.value==computerValue)
                {
                    roundResult.innerText="TIE";
                
                }
                else if(e.target.value<computerValue)
                {   
                    computerPoints += 1;
                    roundResult.innerText="LOSE";
                    computerPointsText.innerText=computerPoints;
                }
                else
                {   
                    usersPoints += 1;
                    roundResult.innerText="WIN";
                    usersPointsText.innerText=usersPoints;
                }
            
            if(roundLeft<1)
            {   
                container.style.display="none";
                gameResult.style.display="block";
                gameInput.value="";
                if(usersPoints>computerPoints)
                {
                    gameResult.innerText="WON";
                    return;
                }
                else if(usersPoints==computerPoints)
                {
                    gameResult.innerText="TIE";
                    return;
                }
                else
                {
                    gameResult.innerText="LOSE";
                    return;
                }
            }
       }