const country = 'USA'
const continent = 'North America'
let population = '328.2'
const isIsland = false
const language = 'English'

if (language === 'English' && population < 50 && !isIsland) {
    console.log(`You should live in ${country} 😃`);
} else {
    console.log(`${country} does not meet your criteria 😞`);
}