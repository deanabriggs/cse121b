/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Deana Briggs";

let currentDate = new Date();
let currentYear = currentDate.getFullYear();

const profilePicture = "images/myphoto.jpg";


/* Step 3 - Element Variables */

let foodElement = document.getElementById('food');
let yearElement = document.querySelector('#year');
let imageElement = document.querySelectorAll('img');


/* Step 4 - Adding Content */

let nameElement = document.querySelector('#name');
nameElement.innerHTML = `<strong>${fullName}</strong>`;


yearElement.textContent = currentYear;
imageElement.setAttribute = ('src', profilePicture);
imageElement.setAttribute = ('alt', `Profile image of ${fullName}`)


/* Step 5 - Array */






