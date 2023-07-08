// -----------Lession-2 --------------------------

//1. Create two variables, firstCard and secondCard
// set their values to a random number between 2-11
//2. Create a varible, sum and set it to the sum of the two cards

// let firstCard = 3;
// let secondCard = 7;

// let sum = firstCard + secondCard
// console.log(sum)

//-------------------- Lession-3-----------------------------
// if (sum < 21){
//     console.log("Do you want to draw new card?")
// } else if(sum === 21){
//     console.log("Wohoo! you've blackjack")
// } else {
//     console.log("You're out of the game")
// }
//------------- Lession-4 -----------------------------------------

// Check if a person is old enough to enter the nightclub (21)
// log a suitable message in the both the cases 
// if less than 21 -> "You can't enter the club!"
// else     ->  "Welcome"

// let age = 35;

// if (age => 21){
//     console.log("Welcome")
// }
// else{
//     console.log("You can not enter the club!")
// }

//------------- Lession-5 -----------------------------------------

// check if the person is eligible for birthday card from the king! (100)

// if less than 100 -> "Not elegible"
// else if exactly 100 -> "Hera is your birthday card from the king!"
// else                -> "Not elegible, you have already gotten one"

// let age = 101

// if (age < 100){
//     console.log("Not elegible")
// }
// else if (age === 100){
//     console.log("Hera is your birthday card from the king!")
// }
// else {
//     console.log("Not elegible, you have already gotten one")
// }

//------------- Lession-9 -----------------------------------------
// console.log(4 === 3)
// console.log(5 > 2)
// console.log( 12 > 12)
// console.log(3 < 0 )
// console.log(3 >= 3)
// console.log(11 <= 11)
// console.log(3 <= 2)

//------------- Lession-10 -----------------------------------------
// 1. Declare a variable called message and assign its value to an empty string 
// let msg = " "
// // 2.Reassign the message variable to the string we're logging out
// msg = "We're logging out"

// // 3. Log it out

// console.log(msg)

//------------- Lession-21 -----------------------------------------
//arrys is a ordered list of items andd it is a 0 index

// let featuredPost = ["Checked out my netflix clone",
//  "Here's the code for my project",
//   "I've just relaunched my protfolio"];

  // Create a array that lists your i.e,. experience, education, licenses,skills or similar
  // The item of the should be string 

//   let myPotfolio = ["I've 2 year's of experience in coding", 
//   "I'm the 2nd year undergraduate in CSE",
//   "I've licence of completion of full stack development from Udemy",
//    "I know C, C++, Java, and JavaScript as a programming language and I've completed the DSA course from Udemy"];

   //------------- Lession-22 -----------------------------------------

//    console.log(myPotfolio[0]);
//    console.log(myPotfolio[1]);
//    console.log(myPotfolio[2]);
//    console.log(myPotfolio[3]);
//    console.log(myPotfolio.length)

   //------------- Lession-23 -----------------------------------------

   //1. Create an array that describe yourself. Use the three primitive data primitive data type you've learned
   // It should contain your name(String),your age(number), and wether you like pizza(boolean)

//    let myInfo = ["Abhay Kumar", 20 , true];

//  console.log(myInfo[0]);
//  console.log(myInfo[1]);
//  console.log(myInfo[2]);

 //------------- Lession-24 -----------------------------------------

 //Adding and removing items fromd the array

//  let array = [7, 5];

//  array.push(6);
// console.log(array);

// push the newMessage to the message array, and then log out the array

// let message = ["Hey. how's it going ", "I'm great, thank you! How about you?", "All good . Been working on my protofolio lately"];
// let newMessage = "Same here!";

// message.push(newMessage);
// message.pop(newMessage);
// console.log(message);
 //------------- Lession-27 -----------------------------------------
 //Count to ten!
 // We need to specify...
 //Where should we START counting 
 // Where to FINISH line?
 //What's the STEP SIZE we should use?

//  for (let count =1; count <= 10; count++){
//    console.log(count)
//  }
 //------------- Lession-28 -----------------------------------------
 //Create a loop that count from 10 to 100 in steps of 10
 // Use the console.og to log out the number
  
//  for (let i = 10; i<= 100; i += 10){
//    console.log(i)
//  }
 //------------- Lession-29 -----------------------------------------
 // for loops and arrys
//  let message = ["Hey. how's it going ", "I'm great, thank you! How about you?", "All good . Been working on my protofolio lately", "Same here!", "Great to hear"];

//  for(let  i = 0; i<= message.length; i++){
//    console.log(message[i]);
// }
 //------------- Lession-30 -----------------------------------------
 //Create a loop that logs outs all the cards in the array
 // use the card.length to specify how long the loop should run

//  let cards = [7, 3, 9];
 
//  for( let i = 0; i < cards.length; i ++){
//    console.log(cards[i]);
//  }
//------------- Lession-30 -----------------------------------------
// Render the sentences in the greetingEl paragraphusing a for loops and .textContent

// let sentences = ["Hello", "my", "name", "is ", "Abhay"];
// let greetingEl = document.getElementById("greeting-el");

// for( let i = 0; i< sentences.length; i++){
//    greetingEl.textContent +=" " + sentences[i];
// }

//------------- Lession-32 -----------------------------------------

//Returning values in function

// let player1Time = 222;
// let player2Time = 333;

// function fastestRaceTime(){
//    if(player1Time < player2Time)
//    return player1Time;

//    else if(player1Time < player2Time){
//       return player2Time;
//    }
//    else
//       return player1Time;

// }

// let raceTime = fastestRaceTime();
// console.log(raceTime);

//Write a function that return total race time 
// Call/Inovke the function and store the returned value in a new variable
//Finally, log the variable out

//  let player1Time = 222;
//  let player2Time = 333;
// function totalRaceTime(){
//    return player1Time + player2Time;
// }

// let totalTime = totalRaceTime();
// console.log(totalTime);

//------------- Lession-36/7 -----------------------------------------

// Returning a random number 

// let randomNumber = Math.random() *12;  // What does math.randpm() do?
//  it generate a random number between 0 and 1 (not inclusive o 1)

// console.log(randomNumber);

//------------- Lession-36/7 -----------------------------------------
//Flooring the number 

// let flooredNumber = Math.floor(3.45632);
// console.log(flooredNumber);

//------------- Lession-39 -----------------------------------------
// let diceNumber = Math.floor( Math.random()*6);
// console.log(diceNumber+1);

//Create a function, rollDice(), that return a random number between 1 and 6

// function rollDice(){
//    let diceNumber = Math.floor( Math.random()*6) +1;
//    console.log(diceNumber+1);
  // return diceNumber;
//}
// rollDice();
//------------- Lession-45 -----------------------------------------
// let hasCompletedCourse = false;
// let hasGivenCertificate = true;

// if(hasCompletedCourse === true && hasGivenCertificate ===true){
//    generatingCertificate();
// }

// function generatingCertificate(){
//    console.log("Generating Certificate....");
// }
//------------- Lession-45 -----------------------------------------
// let hasSolvedChallenge = true;
// let hasHintLeft = false;

// if(hasSolvedChallenge === false && hasHintLeft === false){
//      showSolution();
// }

// function showSolution(){
//    console.log("Showing Solution.....");
// }

//------------- Lession-45 -----------------------------------------

//Create two boolean variable, likeDocumentries and likeStartups
//Use an OR statements (||) to call recommendMovie() if either if those variable are true

// let likeDocumentries = false;
// let likeStartups = true;


// function recommendMovie(){
//    console.log("Hey, Check out this new films we thinkk you will like! ");
// }

// if(likeDocumentries === true || likeStartups ===true){
//    recommendMovie();
// }

//------------- Lession-45 -----------------------------------------

//Create you first object

// let fort = {
//    title: "Red Fort",
//    price:25,
//    isSuperHost:false,
//    Image: ["redport/image1/png", "redport/image2/png", "redport/image1/png"],
//    sayHello: function(){
//       console.log("Say, Hello!");
//    }
// }
// console.log(fort["Image"]);
// console.log(fort.title);
// console.log(fort.price);
// fort.sayHello(); 

//------------- Section-4------------------------------------------------
//------------- Lession-1------------------------------------------------
//Create a person objects that contains three keys: name, age, country.
//Use yourself as an example to set the values for name, age , and coutry
//Create a function that, logData(), that uses the perdon objects to create a
//String in the following formats :
//"Abhay is 20 years old and lives in India"
//call the logData() function to verify that it works

// let person = {
//    name : "Abhay Kumar",
//    age : 20,
//    country: "India",

//    logData : function(){
//       console.log(person.name + " is " + person.age +" years old and lives in " + person.country);
//    }
// }

// person.logData();
//------------- Lession-2------------------------------------------------
//Less than 6 years old -> free 
// 6 to 17 years old -> child discount
// 18 to 26 yeas old -> student discount
// 27 to 66 years old -> full price
// over 66 years old -> senior citizen discounts

// Create a conditional statements  (if/else/else if) that logs out the discounts
// the passenger will get discounts based upon the value of the age variable

// let age = 18

// if ( age < 6){
//    console.log("Free")
// }
// else if ( age >= 6 && age <= 17){
//    console.log("child discount")
// }
// else if( age>= 18 && age <= 26){
//    console.log("Student discount")
// }
// else if( age >= 27 && age < 66){
//    console.log("Full price")
// }
// else {
//    console.log("senior citizen discount")
// }
//------------- Lession-3------------------------------------------------

// Use a for loop to log out the five largest countries in the worlds

/* The 5 largest  countries in the world are :
- China
- India
- United States 
- Indonesia 
- Pakistan */

// let largestCountries = ["China", "India", "United States", "Indonesia", "Pakistan"]
//  console.log("The 5 largest countries in the world:")
// for( let i = 0; i<largestCountries.length; i++){
//    console.log("- "+largestCountries[i])
// }
//------------- Lession-4------------------------------------------------

// You need to help me fixup the largestCountries array so that 
// China and pakistan are added back into their respective places
// Use push() & pop() and their counterparts unshift() and shift()
// Google how to use unshift() and shift()

// let largestCountries = ["Tuvalu", "India", "United States", "Indonesia", "Monaco"]

// largestCountries.pop()
// largestCountries.push("Pakistan")
// largestCountries.shift()
// largestCountries.unshift("China")
// for( let i = 0; i<largestCountries.length; i++){
//        console.log("- "+largestCountries[i])
//     }

//------------- Lession-5------------------------------------------------
// 
let dayOfMonth = 13
let weekDay = "Friday"