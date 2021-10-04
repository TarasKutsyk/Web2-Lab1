module.exports = class Planet {

  constructor(name, location, atmosphere, population) {
    this.name = name;
    this.location = location;
    this.atmosphere = atmosphere;
    this.population = population;
  }

  toString() {
    return `Planet ${this.name}, located in ${this.location} with a ${this.atmosphere} atmosphere and population of ${this.population}`;
  }
}
