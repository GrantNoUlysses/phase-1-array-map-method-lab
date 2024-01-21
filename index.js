const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

//const titleCased = () => {
//  return tutorials
//}
function titleCased() {
  return tutorials.map((tutorial) => {
    let words = tutorial.split(' '); // Split the tutorial title into an array of words
    words = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); // Capitalize the first letter of each word
    return words.join(' '); // Join the words back into a string
  });
}

const formattedTutorials = titleCased();
console.log(formattedTutorials);