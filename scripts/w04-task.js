/* LESSON 4 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Deana Briggs",
    photo: "images/myphoto.jpg",
    favoriteFoods: ['sandwitches', 'pasta', 'roast', 'fruit', 'ice cream', 'cookies'],
    hobbies: ['skating', 'crocheting', 'sewing', 'pottery', 'baking'],
    placesLived: []
};

/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Roseville, CA',
        length: '16 years'
    },
    {
        place: 'Wisconsin, MN',
        length: '2 years'
    },
    {
        place: 'Lakewood, CA',
        length:  '3 years'
    },
    {
        place: 'Stockton, CA',
        length: '5 years'
    },
    {
        place: 'Manteca, CA',
        length: '6 years'
    },
    {
        place: 'San Jose, CA',
        length: '8 years'
    },
    {
        place: 'Santa Clara, CA',
        length: '5 years'
    }
);

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').setAttribute('src', myProfile.photo);
document.querySelector('#photo').setAttribute('alt', myProfile.name);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
})

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
})

/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd')
    dt.textContent = place.place;
    dd.textContent = place.length;
    document.querySelector('#places-lived').appendChild(dt);
    document.querySelector('#places-lived').appendChild(dd);
})

