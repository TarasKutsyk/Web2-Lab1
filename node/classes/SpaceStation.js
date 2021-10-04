module.exports = class SpaceStation {

  constructor(name, capacity, location) {
    this.name = name;
    this.capacity = capacity;
    this.location = location;
  }

  toString() {
    return `Station ${this.name}, located in ${this.location} with a capacity of ${this.capacity} space ships`;
  }
}
