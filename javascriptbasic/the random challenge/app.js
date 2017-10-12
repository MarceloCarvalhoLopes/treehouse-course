var number = prompt('Please insert a number of the 1 to 6');
var randomNumber = Math.random(number) * 6 + 1;
var secondNumber = Math.random(randomNumber) * 6 + 1; 

document.write('Your number :' + randomNumber + ' number of the number : ' + secondNumber )

