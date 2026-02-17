const cart = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Headphones", price: 200 }
];

function calculateTotal(cartItems) {
  let total = 0;
  for (let i = 0; i < cartItems.length; i++) { // Bug: <= should be <
      total += cartItems[i].price; // Bug: cartItems[i] is undefined on the last iteration
      console.log(total);
  
  }
  if (typeof total !== "number" || Number.isNaN(total)) {
    console.log("Error: total is not a valid numner");
  } else {
    console.log("Total is a valid number.");
  }
  return total;
  
}

function applyDiscount(total, discountRate) {
  while (cart === "") {
    return error("No items in cart");//adds validation for empty cart

  } if (discountRate === 0 || discountRate === 1) {
    throw new Error("Invalid discount rate");
  } else {
  return total - total * discountRate; // Bug: Missing validation for discountRate
}
};

function generateReceipt(cartItems, total) {
  let receipt = "Items:\n";
  cartItems.forEach(item => {
      receipt += `${item.name}: $${item.price}\n`;
  });
  receipt += `Total: $${total.toFixed(2)}`; // Bug: total may not be a number
  return receipt;
}

// Debugging entry point
console.log("Starting shopping cart calculation...");
const total = calculateTotal(cart);
const discountedTotal = applyDiscount(total, 0.2); // 20% discount
const receipt = generateReceipt(cart, discountedTotal);

document.getElementById("total").textContent = `Total: $${discountedTotal}`;
document.getElementById("receipt").textContent = receipt;

//testing emtpy cart
const emptyCart = [];
console.log(calculateTotal(emptyCart));

//testing one item in cart
const oneCartItem = [{name: "Laptop", price: 1000}];
console.log(calculateTotal(oneCartItem));

//testing discount rate of 0
const zeroPercentDiscount = (applyDiscount(total, 0));
console.log(zeroPercentDiscount);

