//creating an empty ARRAY and adding values to it
var playlist = [];

playlist.unshift('first', 'second'); //adding to the begining of an array
playlist.push('third', 'fourth'); //adding to the end of an array

printList(playlist); //taken from helpers.js to print to html
console.log(playlist);

playlist.pop(); //removing to the end of an array
playlist.shift(); //removing to the begining of an array

printList(playlist); //taken from helpers.js to print to html
console.log(playlist);

//iterating through an array
var students = [];

students.unshift('bob', 'jim', 'tom', 'dan');

for (var i = 0; i < students.length; i++) {
  console.log(students[i]);
}

//Printing an array into an list item
var greetings = [
  'Hello',
  'Hola',
  'Ciao',
  'Bonjour',
  'Oi'
];

function print(message) {
  document.write(message);
}

function printList(list) {
  var listHTML = '<ol>';
  for (var i = 0; i < list.length; i++) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printList(greetings);

//JOIN array items together
var daysInWeek = ['Mon', 'Tue', 'Wed'];
var daysString = daysInWeek.join(',');

console.log(daysString);

//CONCATINATING two different arrays
var names = ['bob', 'dan', 'john'];
var newNames = ['tim', 'jen', 'nate'];

var allNames = names.concat(newNames);

console.log(allNames);

//indexOf returns the position in the array of the item
var fruit = ['apple', 'melon', 'grape'];
var position = fruit.indexOf('melon');

console.log(position);

//Printing out the items on an array via a prompt
var products = ['milk', 'butter', 'eggs', 'bread', 'coco'];
var input;

function print(message) {
  document.write('<p>' + message + '</p>');
}

while (true) {
  input = prompt('What item are you looking for? Type "quit" to exit');
  input = input.toLowerCase();
  if (input === 'quit') {
    break;
  } else if (input === 'list') {
    print(products.join(', '));
  } else {
    if (products.indexOf(input) > -1) {
      print('Yes, we have ' + input + ' in the store');
    } else {
      print('No. We do not have ' + input + ' in the store');
    }
  }
}

//Two-Dimensional Arrays
var playList = [
  ['I Did It My Way', 'Frank Sinatra'],
  ['Respect', 'Aretha Franklin'],
  ['Imagine', 'John Lennon'],
  ['Born to Run', 'Bruce Springsteen'],
  ['Louie Louie', 'The Kingsmen'],
  ['Maybellene', 'Chuck Berry']
];

function print(message) {
  document.write(message);
}

function printSong( song ) {
  var listHTML = '<ol>';
  for ( var i = 0; i < song.length; i += 1) {
    listHTML += '<li>' + song[i][0] + ' by ' + song[i][1] + '</li>';
  }
  listHTML += '</ol>';
  print(listHTML);
}

printSong(playList);

//Quiz that asks for an snwer to a question, and checks the array for the correct answer
var questions = [
  ['What day is today?', 'Wednesday'],
  ['What day was yesterday?', 'Tuesday'],
  ['What day is tomorrow?', 'Thursday']
];
var correctAnswers = 0;
var questions;
var answer;
var response;
var html;
var correct = [];
var wrong = [];

function print(message) {
  var outputDiv = document.getElementById('listDiv');
  outputDiv.innerHTML = message;
}

function finalCount(array) {
  var listHTML = '<ol>';
  for (var i = 0; i < array.length; i++) {
    listHTML += '<li>' + array[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

for (var i = 0; i < questions.length; i++) {
  question = questions[i][0];
  answer = questions[i][1];
  answer = answer.toLowerCase();
  response = prompt(question).toLowerCase();
  if (response === answer) {
    correctAnswers += 1;
    correct.push(question);
  } else {
    wrong.push(question);
  }
}

html = 'You got ' + correctAnswers + ' correct';
html += '<h2>You got these questions correct:</h2>';
html += finalCount(correct);
html += '<h2>You got these questions wrong:</h2>';
html += finalCount(wrong);
print(html);
