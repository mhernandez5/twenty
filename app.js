do{

 alert("Welcome to 20! This is a competition to see which player gets closer to the number 20.You are going to be playing agains the computer.\n\nYou will draw numbers from 1 to 10.The computer will stop at 16.\n\nPay attention to the screen to see what your total isFinite, and if you need another number, press `y`.");
 alert("Now...it is user's turn.");

 function userNamee(){
   var namee = prompt ("what is your name?"); 
   return namee
 }

 function userRandom(){ 
   var ran2 = Math.floor(Math.random()* 10) + 1
   return ran2
 }

 function UserAle(){
   var compn2 = 0
   do{
     compn2 = compn2 + userRandom()
     var exionex = prompt (`Your current total is ${compn2}. Would you like another number? If you would like to stop, press 'n' to stop.`);
   } while (  (exionex != "n") && (compn2 < 20))  
     alert (`You stoped at ${compn2}`);
     return compn2 
  }

 alert("Now...it is the computer's turn.");

 function Computers(){
   var ran = Math.floor(Math.random()* 10) + 1
   return ran
 }

 function ComputerCons(){   
   var compn = 0
   do{
     var ran = Math.floor(Math.random()* 10) + 1
     compn = compn + ran
     alert(`The new number is ${ran}

  the computer's total is ${compn}`);
   } while ( compn < 16)
   alert(`the computer's finished with ${compn}.`)
   return compn
 }


 function twenty(){
  var compn2 = UserAle()
  var compn = ComputerCons()
  var namee = userNamee()
  if (compn2 >= compn){
    alert (`${namee} win. the computer's got ${compn}, and ${namee} got ${compn2} `)
    alert (`The current score is ${namee}:1, computer:0`)
  } else if (compn2 <= compn){
    alert (`the computer's winnnn. ${namee} got computer:1`)
    alert (`The current score is ${namee}:0, computer:1`)
  }
 }
 twenty()


 var exionex = prompt ("Do you want play again? Press `` for yes, and `n` for no.");
} while ( exionex != "n" )

alert("Bye")

// ASK MR CASTILLO FOR HELP ABOVE AT THE BEGINNING OF THE CLASS!!

