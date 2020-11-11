import { writeFile } from 'fs';

let name = process.argv[2];

writeFile('data.json', name, error => console.log('err ->',error) )