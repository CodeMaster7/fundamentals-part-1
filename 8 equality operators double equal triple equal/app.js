const numNeighbours = prompt('How many neighbour countries does your country have?')
console.log(numNeighbours);
console.log(typeof numNeighbours);
// const numNeighbours = Number(prompt('How many neighbour countries does your country have?'))
// console.log(numNeighbours);
// console.log(typeof numNeighbours);

if (numNeighbours === 1) {
    console.log('Only 1');
} else if (numNeighbours > 1) {
    console.log('More then 1 border');
} else {
    console.log('No borders');
}