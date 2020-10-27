/**
 * Author proudk
 */
// old interface
function Shipping() {
  this.request = function (model, price, count) {
    return {
      model,
      total: "$" + price * count,
    };
  };
}

// new interface
function AdvancedShipping() {
  this.login = function (credential) {
    console.log("The user is logged in.");
  };
  this.setFavorite = function (model) {};
  this.getDiscountedPrice = function (price, count) {
    console.log("The Black Friday Event has ongoing. 50% discounted...");
    return "$" + (price * count) / 2;
  };
}

// adapter interface
function ShippingAdapter(credential) {
  let shipping = new AdvancedShipping();

  shipping.login(credential);

  return {
    request: function (model, price, count) {
      shipping.setFavorite(model);
      const total = shipping.getDiscountedPrice(price, count);
      return {
        model,
        total,
      };
    },
  };
}

(function run() {
  let shipping = new Shipping();
  let credentials = { token: "4af21d4g" };
  let adapter = new ShippingAdapter(credentials);

  // original shipping object and inteface
  let cost = shipping.request("socks", 2, 5);
  console.log(`${cost.model}'s cost: ${cost.total}`);

  // new shipping object with adapted interface
  cost = adapter.request("another socks", 2, 5);
  console.log(`${cost.model}'s cost: ${cost.total}`);
})();
