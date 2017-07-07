const fs = require('fs');
const artists = fs.readFileSync('./artists.json');
const fullList = JSON.parse(artists);

const obj = {'name': '', 'location': '', 'shop': '', 'shop-url': '', 'instagram': '', 'category': []};
fullList.push(obj);
fs.writeFileSync('./artists.json', JSON.stringify(fullList, null, 4));
console.log('Blank artist added!');
