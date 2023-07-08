// ---------------------------Logic of the game---------------------------------

//Write the conditionals according to these rules:
// if less than or equal to 20 -> "do you want to draw new a new card"
//else if exactly 21 -> "Wohooo! You've got the blackjack"
//else -> "You're out of the game!"
// Create a variable called isAlive and assign it to true
// Flip its value to false in the appropriate code block

// 1. Create a startGame() function. Move the conditional
// below (11-20) inside the body of the function.
// 1. Store the message-el paragraph in a variable called messageEl
// 2. display the message in the messageEl using the message.textContent
//  2. Store the card paragraph in a variable called cardsEl
// 3. Render the cards on the page using this format -> "Cards: 10 4"
// 1. Create a new function called startGame() that calls the renderGame()
// 2. Use the getRandomCard to set the value of firstCard and secondCard

let cards = []  // array --- ordered list of items
let sum = 0;
let hasblackjack =false ;
let message = "";
let isAlive = false;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
// let sumEl = document.querySelector("#sum-el");
 let cardsEl = document.getElementById("cards-el");

 let player = {
    name : "Abhay",
    chips : 349
 }
 

 let playerEl = document.getElementById("player-el");

 playerEl.textContent = player.name + ":" + " $"+ player.chips;

//1. Create a fumction, getsRandomCard(), that always returns the number 5
function getsRandomCard(){ 
    let cardNumber = Math.floor(Math.random()*13) +1;
    if(cardNumber === 1){
        return 11;
    }
    else if(cardNumber > 10){
        return 10;
    }
    else
    return cardNumber;
}


function renderGame(){
    cardsEl.textContent = "Cards: "
      for( let i =0 ; i< cards.length; i++){
        cardsEl.textContent += cards[i] + " ";
    }

    sumEl.textContent = "Sum: " +  sum
   
    if (sum <= 20){
        message= "do you want to draw new a new card ?";
    }
    else if(sum === 21){
        message = "You've got the blackjack.";
        hasblackjack = true;
    }
    else
    {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    
    // console.log(message);
}

function startGame(){
    isAlive = true;
    let firstCard = getsRandomCard();
    let secondCard = getsRandomCard();
    cards = [firstCard , secondCard]
    sum = firstCard + secondCard;
    renderGame();
}

//Create a function called newCard() that logs out "Drawing a new card";
function newCard(){
    // alert("Drawing a new card!");
    //1. Create a card variable, and hard code its value to a number (2-11);
    // 3. Use the getRandomCard to set the value of the card

    if(isAlive === true && hasblackjack === false){
        let newCard = getsRandomCard();
        cards.push(newCard);
        
        //2. Add the new card to the sum variable
        sum += newCard;
        
        //3. Call the startGame()
        renderGame()
       // cardsEl.textContent += " " + newCard;
    }
    
}




//Cash Out
// console.log(hasblackjack)

// Log out to check that you're doing it right
// console.log(isAlive)
