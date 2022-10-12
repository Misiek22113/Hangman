function searchFruit(fruitOne, fruitTwo) {
  let text = `My favorite fruit is grapes. Because with grapes, you always
    get another chance. 'Cause, you know, if you have a crappy apple or a peach,
    you're stuck with that crappy piece of fruit.
    But if you have a crappy grape, no problem - just move on to the next.
    'Grapes: The Fruit of Hope.'`;

  console.log(`${text.includes(fruitOne)}\n${text.includes(fruitTwo, 50)}`);
}

let fruitOne = "apple";
let fruitTwo = "grapes";

searchFruit(fruitOne, fruitTwo);

// Call the function here with the arguments