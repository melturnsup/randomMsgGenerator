

//Array of different messages
const randMsg = ["Nothing is impossible. The word itself says i'm possible!", "Good luck today!", "Mistakes are part of the learning process", "The world is better because I am in it", "I trust my intuition."];
/*A function that loops through the index of the 
positive message array and prints a random string*/

let randInt = () => {
  return Math.floor(Math.random() * (5 - 1 + 1) + 1);
}

console.log(randInt());