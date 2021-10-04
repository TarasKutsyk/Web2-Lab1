module.exports = class Cargo {

  constructor(name, weight, destination, isDelivered = false) {
    this.name = name;
    this.weight = weight;
    this.destination = destination;
    this.isDelivered = isDelivered;
  }

  toString() {
    return `Cargo \'${this.name}\', ${this.weight} kg` + (this.isDelivered ?
        `is being delivered to ${this.destination}` :
        `has been delivered to ${this.destination}`
    );
  }
}
