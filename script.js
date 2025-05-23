/*A function that returns a random message*/

const randMsg = () => {

  //Arrays of different positive messages

  const subjects = [
    "Your mind", 
    "Your effort", 
    "Your kindness", 
    "Your potential"
  ];

  const actions = [
    "can achieve great things", 
    "is more powerful than you think", 
    "makes a difference", 
    "is inspiring", 
    "shines bright"
  ];

  const outcomes = [
    "keep going!", 
    "you’re doing amazing!", 
    "the world needs your light.", 
    "believe in yourself.", 
    "you’re on the right path."
  ];

  //Generates a random index within an array
  const randIndex = (arr) => Math.floor(Math.random() * arr.length);
  

  /* Test of random intiger generator
  console.log(randIndex(outcomes));
*/
  //connecting random index with the 3 arrays
  const part1 = subjects[randIndex(subjects)];
  const part2 = actions[randIndex(actions)];
  const part3 = outcomes[randIndex(outcomes)];

  return `${part1} ${part2}, ${part3}`
  
  
};


randMsg()


//Connecting randMsg function to the button

document.getElementById("msgButton").addEventListener("click", () => {
  const message = randMsg();
  document.getElementById("displayMessage").textContent = message;
});