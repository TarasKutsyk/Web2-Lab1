const {SpaceStation, Collection, Planet, Cargo} = require('./classes');

const cargoCollection = new Collection([
  new Cargo('Nuclear reactor', 10e7, 'Omega station', true),
  new Cargo('Gunship missiles', 10e4, 'Planet Mars')
]);

const stationCollection = new Collection([
  new SpaceStation('Omicron', 10e12, 'Solar system'),
  new SpaceStation('Epsilon', 10e14, 'Alpha system'),
  new SpaceStation('Rhode', 10e10, 'Earth orbit'),
]);

const planetsCollection = new Collection([
  new Planet('Mars', 'Solar system', 'None', 0),
  new Planet('Nidah', 'Omega system', 'Earth-like', 10e8)
])

//a
stationCollection.addElement(new SpaceStation('Omega', 10e13, 'Omega system'));
//b
stationCollection.editElement(el => el.name === 'Epsilon',
  {name: 'Theta'});
//c
stationCollection.deleteElement(el => el.name === 'Theta');
//d
console.log(stationCollection.findElement(el => el.location === 'Omega system'));
stationCollection.print();

//e
planetsCollection.addElement(new Planet('Kylo-1', 'Omicron system', 'None', 0));
//f
planetsCollection.editByProperty('name', 'Kylo-1', {atmosphere: 'dense'});
//g
planetsCollection.deleteByProperty('name', 'Mars');
//h
console.log(planetsCollection.findByProperty('location', 'Omega system'));
planetsCollection.print();

//i
cargoCollection.addElement(new Cargo('Space food', 2*10e3, 'Omicron station'))
//j
cargoCollection.editByProperty('destination', 'Planet Mars',
  {name: 'Air cylinders', weight: 300});
//k
cargoCollection.deleteByProperty('isDelivered', true);
cargoCollection.print();
//l
console.log(stationCollection.findElement(el => el.location.includes('Earth')));
