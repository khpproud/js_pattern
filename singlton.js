/**
 * Author proudk
 */
// Object literal
let obj = {
  name: "Park",
  age: 33,
  introduce: function () {
    console.log(`My name is ${this.name}, and the age is ${this.age}`);
  },
};

obj.introduce();

// IIFE with encapsulation
let car = (function () {
  let instance;
  function init(brand) {
    return {
      brand,
      log: function () {
        console.log("brand:", this.brand);
      },
    };
  }
  return {
    getInstance: function (brand) {
      if (!instance) {
        instance = init(brand);
      }
      return instance;
    },
  };
})();

let hyundai = car.getInstance("hyundai");
let hyundai2 = car.getInstance();
console.log(hyundai === hyundai2);
hyundai.log();
hyundai2.log();
