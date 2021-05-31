var PLAYERSCORE = 0;
var COMPUTERSCORE = 0;
var Gamerecord = 0;
var Gamenorecord = 0;
var arr = [0,0,0,0,0,0,0,0,0];
var wincombo = [[0,1,2]
               ,[3,4,5]
               ,[6,7,8]
               ,[0,3,6]
               ,[1,4,7]
               ,[2,5,8]
               ,[0,4,8]
               ,[2,4,6]];

var player1 = [];
var player2 = [];

var name1="";
var name2="";
function game()
{
    document.getElementById("wc").style.display="None";
    document.getElementById("nm").style.display="None";
    document.getElementById("nm2").style.display="None";
    document.getElementById("btn").style.display="None";
    var container = document.getElementById("con");
    var field = document.getElementById("field");
    var maze = document.getElementById("maze");
    field.appendChild(maze);
    container.style.flexDirection="row";
    maze.style.display="flex";
    var playerscore=document.getElementById("PlayerScore");
    var computerscore = document.getElementById("ComputerScore");
    playerscore.style.display="flex";
    computerscore.style.display="flex";
    name1 = document.getElementById("pname1").value;
    if ( name1 == "" )
    {
        name1="Player1";
    }
    name2 = document.getElementById("pname2").value;
    if ( name2 == "" )
    {
        name2="Player2";
    }
    var playerscorenamefield = document.getElementById("NP");
    var compscorenamefield = document.getElementById("NC");
    playerscorenamefield.innerHTML=name1;
    compscorenamefield.innerHTML=name2;
    container.style.justifyContent="space-around";
    var scoreP = document.getElementById("SP");
    var scoreC = document.getElementById("SC");
    scoreC.innerHTML=COMPUTERSCORE;
    scoreP.innerHTML=PLAYERSCORE;
    maze.style.zIndex=1;
    document.getElementById("restart").style.display="flex";
    document.getElementById("turn").style.display="flex";
    document.getElementById("turn").innerHTML="Turn of  " + name1;
    var xyz = window.matchMedia("(max-width:800px)")
    if ( xyz.matches)
    {
        document.getElementById("con").style.flexDirection="column";
        document.getElementById("con").style.padding="60px";
        document.getElementById("con").style.height="700px";
        document.getElementById("PlayerScore").style.height="100px";
        document.getElementById("NP").style.fontSize="20px";
        document.getElementById("NP").style.width="200px";
        document.getElementById("NP").style.height="40px";
        document.getElementById("PlayerScore").style.zIndex= "5";
        document.getElementById("SP").style.fontSize="20px";
        document.getElementById("SP").style.width="200px";
        document.getElementById("ComputerScore").style.height="100px";
        document.getElementById("NC").style.fontSize="20px";
        document.getElementById("NC").style.width="200px";
        document.getElementById("NC").style.height="40px";
        document.getElementById("ComputerScore").style.zIndex= "5";
        document.getElementById("SC").style.fontSize="20px";
        document.getElementById("SC").style.width="200px";
        document.getElementById("PlayerScore").style.transform = "rotate(180deg)";
        document.getElementById("turn").style.top ="500px"; 
        document.getElementById("turn").style.left = "280px";
        document.getElementById("turn").style.transform="rotate(270deg)";


    }
    var xyz = window.matchMedia("(max-width:500px)")
    if ( xyz.matches)
    {
        document.getElementById("con").style.padding="20px"; 
        document.getElementById("turn").style.top ="470px"; 
    }

    
}
var xyz = window.matchMedia("(max-width:800px)")
    if ( xyz.matches)
    {
        document.getElementById("con").style.flexDirection="column";
        document.getElementById("con").style.padding="60px";
        document.getElementById("con").style.height="700px";
        document.getElementById("PlayerScore").style.height="100px";
        document.getElementById("NP").style.fontSize="20px";
        document.getElementById("NP").style.width="200px";
        document.getElementById("NP").style.height="40px";
        document.getElementById("PlayerScore").style.zIndex= "5";
        document.getElementById("SP").style.fontSize="20px";
        document.getElementById("SP").style.width="200px";
        document.getElementById("ComputerScore").style.height="100px";
        document.getElementById("NC").style.fontSize="20px";
        document.getElementById("NC").style.width="200px";
        document.getElementById("NC").style.height="40px";
        document.getElementById("ComputerScore").style.zIndex= "5";
        document.getElementById("SC").style.fontSize="20px";
        document.getElementById("SC").style.width="200px";
        document.getElementById("PlayerScore").style.transform = "rotate(180deg)";
        document.getElementById("turn").style.top ="500px"; 
        document.getElementById("turn").style.left = "280px";
        document.getElementById("turn").style.transform="rotate(270deg)";


    }
    var xyz = window.matchMedia("(max-width:500px)")
    if ( xyz.matches)
    {
        document.getElementById("con").style.padding="20px"; 
        document.getElementById("turn").style.top ="470px"; 
    }

function gamestarter(ele,sap)
{
if(Gamerecord%2==0)
{
    ele.innerHTML="X";
    Gamerecord = Gamerecord + 1;
    player1.push(sap);
    ele.disabled=true;
    if (wincheck(player1,name1))
    {
        PLAYERSCORE = PLAYERSCORE+1;
        var scoreP = document.getElementById("SP");
        var scoreC = document.getElementById("SC");
        scoreC.innerHTML=COMPUTERSCORE;
        scoreP.innerHTML=PLAYERSCORE;
        return;
    }
    else
    {
    document.getElementById("turn").innerHTML="Turn of  " + name2;
    }
}
else if(Gamerecord%2==1)
{
    ele.innerHTML="O";
    Gamerecord=Gamerecord+1;
    player2.push(sap);
    ele.disabled=true;
    if (wincheck(player2,name2))
    {
        COMPUTERSCORE=COMPUTERSCORE+1;
        var scoreP = document.getElementById("SP");
        var scoreC = document.getElementById("SC");
        scoreC.innerHTML=COMPUTERSCORE;
        scoreP.innerHTML=PLAYERSCORE;

        return;
        

    }
    else
    {
    document.getElementById("turn").innerHTML="Turn of  " + name1;
    }
}
if(player2.length+player1.length==9)
{
    
    var m = document.getElementById("status");
    m.style.display="flex";
    m.innerHTML="GAME";
    document.getElementById("reset").style.display="flex";
    wincheck(player1,"PLAYER 1");
    wincheck(player2,"PLAYER 2");
}
ele.disabled=true;
console.log(player1);
console.log(player2); 

}

function reset()
{
 document.getElementById("button0").innerHTML="";
 document.getElementById("button1").innerHTML="";
 document.getElementById("button2").innerHTML="";
 document.getElementById("button3").innerHTML="";
 document.getElementById("button4").innerHTML="";
 document.getElementById("button5").innerHTML="";
 document.getElementById("button6").innerHTML="";
 document.getElementById("button7").innerHTML="";
 document.getElementById("button8").innerHTML="";
 document.getElementById("button0").disabled=false;
 document.getElementById("button1").disabled=false;
 document.getElementById("button2").disabled=false;
 document.getElementById("button3").disabled=false;
 document.getElementById("button4").disabled=false;
 document.getElementById("button5").disabled=false;
 document.getElementById("button6").disabled=false;
 document.getElementById("button7").disabled=false;
 document.getElementById("button8").disabled=false;
 while(player1.length>0)
{
     player1.pop()
}
while(player2.length>0)
{
    player2.pop();
}
 
 var m = document.getElementById("status");
 m.style.display = "none";
 document.getElementById("reset").style.display="none";
 if ( Gamerecord%2==0)
 {
    document.getElementById("turn").innerHTML="Turn Of "+name1;
 } 
 else if ( Gamerecord%2==1)
 {
    document.getElementById("turn").innerHTML="Turn Of "+name2 ;
 }
 
}





function wincheck(player,name)
{
for ( var i = 0 ; i < wincombo.length ; i++ )
{
    if(compare(wincombo[i],player))
    {
        var m = document.getElementById("status");
        m.style.top="400px";
        m.style.display="flex";
        m.innerHTML=name +" wins";
        document.getElementById("turn").innerHTML="";
        document.getElementById("reset").style.display="flex";
        return true;

    }
}
return false;
}


function compare(arr1,arr2)
{
    for( var i = 0 ; i < arr1.length ; i++ )
    {
        if(!arr2.includes(arr1[i]))
        {
            return false;
        }
    }
    return true;
}
function restart()
{
    reset();
    Gamerecord=0;
    PLAYERSCORE=0;
    COMPUTERSCORE=0;
    var scoreP = document.getElementById("SP");
    var scoreC = document.getElementById("SC");
    scoreC.innerHTML=COMPUTERSCORE;
    scoreP.innerHTML=PLAYERSCORE;

}