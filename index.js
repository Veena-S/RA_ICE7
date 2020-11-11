import { writeFile } from 'fs';

let name = process.argv[2];
console.log(`yo ${name}, what's up dude.`);
console.log(`good day ${name}, are you well?`);

writeFile('data.json', name, error => console.log('err ->',error) )
