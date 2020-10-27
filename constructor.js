/**
 * Authro proudk
 */
// function Car(model, price) {
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.viral = function () {
//   console.log(`${this.model} is $${price}.`);
// };

const Car = (function () {
  function Car(model, price) {
    this.model = model;
    this.price = price;
  }
  Car.prototype.viral = function () {
    console.log(`${this.model} is $${this.price}`);
  };
  return Car;
})();

let car = new Car("RangeRover", 200000);
car.viral();
