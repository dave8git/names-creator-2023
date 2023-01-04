const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['John', 'Clifford', 'Dave', 'Tom', 'Artin', 'Arthur'];
const femaleNames = ['Joanna', 'Kate', 'Ann', 'Olive', 'Autumn', 'Jane'];
const lastNames = ['McDonald', 'Kirk', 'Harvey', 'Smith', 'Rode', 'Lane'];
const people = [];


const randChoice = (array) => {
    return array[Math.floor(Math.random()*array.length)];
};


for (let i = 0; i <= 20; i++) {
    const person = {};

    person['gender'] = randChoice(genders);

    if (person['gender'] === 'male') {
        person['name'] = randChoice(maleNames);
    } else if (person['gender'] === 'female') {
        person['name'] = randChoice(femaleNames);
    }

    person['lastName'] = randChoice(lastNames);

    person['age'] = Math.ceil(Math.random() * 78);

    people.push(person);
}

console.log(people);

let app = JSON.stringify(people);

fs.writeFile('app.json', app, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

