var ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
var user;
var xWin =0;
var oWin =0;
playGame();
function playGame(){
  //getUser();
  $(".x").text("X wins: "+ xWin);
  $(".o").text("O wins: "+ oWin);
  computerPick();
};
  
  $(".one").on("click",function(){
    if(ticTacToeBoard[0]===0){
      $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[0] = "X";
      computerPick();
    }
  
  });
  $(".two").on("click",function(){
     if(ticTacToeBoard[1]===0){
       $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[1] = "X";
      computerPick();
     }
  
  });
  $(".three").on("click",function(){
    
      if(ticTacToeBoard[2]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[2] = "X";
      computerPick();
      }
   
  });
  $(".four").on("click",function(){
    
      if(ticTacToeBoard[3]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[3] = "X";
      computerPick();
      }
  
  });
  $(".five").on("click",function(){
    if(ticTacToeBoard[4]===0){
       $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[4] = "X";
      computerPick();
    }

  });
  $(".six").on("click",function(){
      if(ticTacToeBoard[5]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[5] = "X";
      computerPick();
      }
   
  });
  $(".seven").on("click",function(){
    
      if(ticTacToeBoard[6]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[6] = "X";
      computerPick();
      }
 
  });
  $(".eight").on("click",function(){
    
      if(ticTacToeBoard[7]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[7] = "X";
      computerPick();
      }
  
  });
  $(".nine").on("click",function(){
   
      if(ticTacToeBoard[8]===0){
        $(this).html("<i class='fa fa-times' aria-hidden='true'></i>");
      ticTacToeBoard[8] = "X";
      computerPick();
      }
   
  });

  function computerPick(){
    var pick = Math.floor(Math.random()*(8+1));
    checkForEnd();
    for(var i=0;i<ticTacToeBoard.length;i++){
      if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+1]==="X"&&ticTacToeBoard[i+2]===0&&ticTacToeBoard[i+2]!=="O"){
        ticTacToeBoard[i+2]= "O"
        printComputer(i+2);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+6]==="X"&&ticTacToeBoard[i+2]===0&&ticTacToeBoard[i+2]!=="O"){
        ticTacToeBoard[i+2]= "O"
        printComputer(i+2);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i]==="O"&&ticTacToeBoard[i+1]==="O"&&ticTacToeBoard[i+2]===0&&ticTacToeBoard[i+2]!=="O"){
        ticTacToeBoard[i+2]= "O"
        printComputer(i+2);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+2]==="X"&&ticTacToeBoard[i+1]===0&&ticTacToeBoard[i+1]!=="O"){
        ticTacToeBoard[i+1]= "O"
        printComputer(i+1);
        checkForEnd();
        return;
      }
        if(ticTacToeBoard[i+2]==="X"&&ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+6]===0&&ticTacToeBoard[i+6]!=="O"){
        ticTacToeBoard[i+6]= "O"
        printComputer(i+6);
        checkForEnd();
        return;
      }
      if(ticTacToeBoard[i+1]==="X"&&ticTacToeBoard[i+2]==="X"&&ticTacToeBoard[i]===0&&ticTacToeBoard[i]!=="O"){
        ticTacToeBoard[i]= "O"
        printComputer(i);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i+3]==="X"&&ticTacToeBoard[i+6]==="X"&&ticTacToeBoard[i]===0&&ticTacToeBoard[i]!=="O"){
        ticTacToeBoard[i]= "O"
        printComputer(i);
        checkForEnd();
        return;
      }
        if(ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+8]==="X"&&ticTacToeBoard[i]===0&&ticTacToeBoard[i]!=="O"){
        ticTacToeBoard[i]= "O"
        printComputer(i);
        checkForEnd();
        return;
      }  if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+8]==="X"&&ticTacToeBoard[i+4]===0&&ticTacToeBoard[i+4]!=="O"){
        ticTacToeBoard[i+4]= "O"
        printComputer(i+4);
        checkForEnd();
        return;
      }
      if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+8]===0&&ticTacToeBoard[i+8]!=="O"){
        ticTacToeBoard[i+8]= "O"
        printComputer(i+8);
        checkForEnd();
        return;
      }
      if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+3]==="X"&&ticTacToeBoard[i+6]===0&&ticTacToeBoard[i+6]!=="O"){
        ticTacToeBoard[i+6]= "O"
        printComputer(i+6);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i]==="O"&&ticTacToeBoard[i+3]==="O"&&ticTacToeBoard[i+6]===0&&ticTacToeBoard[i+6]!=="O"){
        ticTacToeBoard[i+6]= "O"
        printComputer(i+6);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i+4]==="O"&&ticTacToeBoard[i+8]==="O"&&ticTacToeBoard[i]===0&&ticTacToeBoard[i]!=="O"){
        ticTacToeBoard[i]= "O"
        printComputer(i);
        checkForEnd();
        return;
       }
        if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+6]==="X"&&ticTacToeBoard[i+3]===0&&ticTacToeBoard[i+3]!=="O"){
        ticTacToeBoard[i+3]= "O"
        printComputer(i+3);
        checkForEnd();
        return;
      }
      if(ticTacToeBoard[i]==="O"&&ticTacToeBoard[i+6]==="O"&&ticTacToeBoard[i+3]===0&&ticTacToeBoard[i+3]!=="O"){
        ticTacToeBoard[i+3]= "O"
        printComputer(i+3);
        checkForEnd();
        return;
      }
       if(ticTacToeBoard[i]==="X"&&ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+2]===0&&ticTacToeBoard[i+2]!=="O"){
        ticTacToeBoard[i+2]= "O"
        printComputer(i+2);
        checkForEnd();
        return;
      }
         if(ticTacToeBoard[i]==="O"&&ticTacToeBoard[i+2]==="O"&&ticTacToeBoard[i+1]===0&&ticTacToeBoard[i+1]!=="O"){
        ticTacToeBoard[i+1]= "O"
        printComputer(i+1);
        checkForEnd();
        return;
      }  if(ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+7]==="X"&&ticTacToeBoard[i+2]===0&&ticTacToeBoard[i+2]!=="O"){
        ticTacToeBoard[i+2]= "O"
        printComputer(i+2);
        checkForEnd();
        return;
      }if(ticTacToeBoard[i+3]==="X"&&ticTacToeBoard[i+4]==="X"&&ticTacToeBoard[i+5]===0&&ticTacToeBoard[i+5]!=="O"){
        ticTacToeBoard[i+5]= "O"
        printComputer(i+5);
        checkForEnd();
        return;
      }
      
      
    }
    if(!ticTacToeBoard.includes(0)){
        console.log("Game Over");
        return;
    }else if(ticTacToeBoard[pick] === 0 && ticTacToeBoard[pick]!=="X"){
        ticTacToeBoard[pick] = "O";
        printComputer(pick);
        checkForEnd();
    }else{
        computerPick();
    }
    checkForEnd();
    console.log(ticTacToeBoard);
  };

function printComputer(box){
  switch(box){
    case 0:
      $(".one").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      break;
    case 1:
        $(".two").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      break;
    case 2:
      $(".three").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      break;
    case 3:
         
        $(".four").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
        break;
    case 4:
        
        $(".five").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      
      break;
    case 5:
       
        $(".six").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
     
      break;
    case 6:
         
        $(".seven").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
      
      break;
    case 7:
         
        $(".eight").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
    
      break;
    case 8:
         
        $(".nine").html("<i class='fa fa-circle-o' aria-hidden='true'></i>");
     
      break;
  }
}

function checkForEnd(){
   checkForVictory();
   if(!ticTacToeBoard.includes(0)){
       alert("No one won this time!");
         
     ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
       $("td").html("");
       playGame();
       return;
    }
}

function checkForVictory(){
  if((ticTacToeBoard[0]==="O"&&ticTacToeBoard[1]==="O"&&ticTacToeBoard[2]==="O")||(ticTacToeBoard[3]==="O"&&ticTacToeBoard[4]==="O"&&ticTacToeBoard[5]==="O")||(ticTacToeBoard[6]==="O"&&ticTacToeBoard[7]==="O"&&ticTacToeBoard[8]==="O")||(ticTacToeBoard[0]==="O"&&ticTacToeBoard[3]==="O"&&ticTacToeBoard[6]==="O")||(ticTacToeBoard[1]==="O"&&ticTacToeBoard[4]==="O"&&ticTacToeBoard[7]==="O")||(ticTacToeBoard[2]==="O"&&ticTacToeBoard[5]==="O"&&ticTacToeBoard[8]==="O")||(ticTacToeBoard[0]==="O"&&ticTacToeBoard[4]==="O"&&ticTacToeBoard[8]==="O")||(ticTacToeBoard[2]==="O"&&ticTacToeBoard[4]==="O"&&ticTacToeBoard[6]==="O")){
    alert("O's Win!");
    oWin += 1;
    ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
    $("td").html("");
    playGame();
  } else if((ticTacToeBoard[0]==="X"&&ticTacToeBoard[1]==="X"&&ticTacToeBoard[2]==="X")||(ticTacToeBoard[3]==="X"&&ticTacToeBoard[4]==="X"&&ticTacToeBoard[5]==="X")||(ticTacToeBoard[6]==="X"&&ticTacToeBoard[7]==="X"&&ticTacToeBoard[8]==="X")||(ticTacToeBoard[0]==="X"&&ticTacToeBoard[3]==="X"&&ticTacToeBoard[6]==="X")||(ticTacToeBoard[1]==="X"&&ticTacToeBoard[4]==="X"&&ticTacToeBoard[7]==="X")||(ticTacToeBoard[2]==="X"&&ticTacToeBoard[5]==="X"&&ticTacToeBoard[8]==="X")||(ticTacToeBoard[0]==="X"&&ticTacToeBoard[4]==="X"&&ticTacToeBoard[8]==="X")||(ticTacToeBoard[2]==="X"&&ticTacToeBoard[4]==="X"&&ticTacToeBoard[6]==="X")){
    alert("X's Win! The Computer is Not happy!");
    xWin += 1;
    ticTacToeBoard = [0,0,0,0,0,0,0,0,0];
    $("td").html("");
    playGame();
  }
}

function getUser(){
  user = confirm("OK to play X and CANCEL to play O")
}