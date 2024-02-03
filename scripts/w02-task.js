/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Deana Briggs";
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
const profilePicture = "images/myphoto.jpg";

/* Step 3 - Element Variables */

let nameElement = document.querySelector('#name');
let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
const imageElement = document.querySelector('img');

/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */

let favFood = ['pasta', 'yogurt parfait', 'sandwiches', 'ice cream', 'roast', 'fruit'];
foodElement.innerHTML = favFood;

let anotherFav = 'popcorn';
favFood.push(anotherFav);
foodElement.innerHTML += `<br>${favFood}`;

favFood.shift();
foodElement.innerHTML += `<br>${favFood}`;

favFood.pop();
foodElement.innerHTML += `<br>${favFood}`;








