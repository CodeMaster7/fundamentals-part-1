const country = 'USA'
const continent = 'North America'
let population = '328.2'
const isIsland = 'USA'
const language = 'English'

const description = `${country} is in ${continent}, and its ${population} million pople speak ${language}`
console.log(description);

if (population > 33) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${33 - population} million below average`);
}