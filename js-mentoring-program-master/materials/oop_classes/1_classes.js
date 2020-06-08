/**
 * A simple class definition for a class named "Car"
 */
const car = {
  brand: 'ford',
  year: 1994
};

/**
 * Create a class with methods
 */



class Car {
  constructor(brand, year) {
    this.brand = brand;
    this.year = year;
  }

  present() {
    return `I have a car with the brand ${this.brand} and ${this.year}`;
  }

  get brandName() {
    return this.brand + 'SSSS';
  }

  set brandName(name) {
    this.brand = name;
  }
}

const ford = new Car('FORD', 1995);

console.log(ford);
