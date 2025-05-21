/*A function that returns a random message*/

const randMsg = () => {

  //Array of different positive messages
  const randMsgArr = [
  "Nothing is impossible. The word itself says i'm possible!",
  "Good luck today!", 
  "Mistakes are part of the learning process!",
  "The world is better because I am in it!",
  "I trust my intuition!"
  ];

  //Generates a random intiger between 0 and 4, the amount of items in the array.
  let randInt = () => {
  return Math.floor(Math.random() * randMsgArr.length);
  };

  /* Test of random intiger generator
  console.log(randInt());
  */

  //connecting the random number generator as the index of the array
  const index = randInt();
  result = randMsgArr[index];
  console.log(result);
  return result;
  
};

/* final test
randMsg();
*/