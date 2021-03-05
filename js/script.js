// task 1
function calculateInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
  let sum = starterPrice + maindishPrice + dessertPrice + beveragePrice;
  return (sum).toFixed(2); // this method rounds the number to keep only two decimals
}
console.log(`Customer A invoice is: ${calculateInvoice(5, 18, 4, 6.50)}€`); // result: 33.50€ -- for starter 1 & main dish 2 & dessert 3 & beverage 4



//  task 2
let starterPriceB = 7;
let maindishPriceB = 12;
let dessertPriceB = 3;
let beveragePriceB = 3.50;
console.log(`Customer B has to pay: ${calculateInvoice(starterPriceB, maindishPriceB, dessertPriceB, beveragePriceB)}€ for the menu.`); // result: 25.50€ -- for starter 2 & main dish 3 & dessert 4 & beverage 1



//  task 3
  // COMBINATION ONE
let starterPriceOne = 6;
let maindishPriceOne = 11;
let dessertPriceOne = 7;
let beveragePriceOne = 5.50;
console.log(`Customer Two has to pay: ${calculateInvoice(starterPriceOne, maindishPriceOne, dessertPriceOne, beveragePriceOne)}€ for the menu.`); // result: 29.50€ -- for starter 3 & main dish 4 & dessert 1 & beverage 2

    // COMBINATION TWO
let starterPriceTwo = 3;
let maindishPriceTwo = 13;
let dessertPriceTwo = 12;
let beveragePriceTwo = 3.90;
console.log(`Customer Two has to pay: ${calculateInvoice(starterPriceTwo, maindishPriceTwo, dessertPriceTwo, beveragePriceTwo)}€ for the menu.`);// result: 31.90€ -- for starter 4 & main dish 1 & dessert 2 & beverage 3

    // COMBINATION Three
let starterPriceThree = 5;
let maindishPriceThree = 11;
let dessertPriceThree = 4;
let beveragePriceThree = 3.90;
console.log(`Customer Three has to pay: ${calculateInvoice(starterPriceThree, maindishPriceThree, dessertPriceThree, beveragePriceThree)}€ for the menu.`);// result: 23.90€ -- for starter 1 & main dish 4 & dessert 3 & beverage 3



//  Bonus Points task
function studentInvoice(starterPrice, maindishPrice, dessertPrice, beveragePrice) {
  let studentDiscount = (starterPrice + maindishPrice + dessertPrice)*0.1;
  let discountedInvoice = (starterPrice + maindishPrice + dessertPrice + beveragePrice) - studentDiscount;

  return (discountedInvoice).toFixed(2);
}
  // Student A
console.log(`After applying the 10% discount, student A has to pay: ${studentInvoice(5, 18, 4, 6.50)}€ for the menu.`); // result: 30.80€ -- for starter 1 & main dish 2 & dessert 3 & beverage 4

  // Student B
console.log(`After applying the 10% discount, student B has to pay: ${studentInvoice(7, 12, 3, 3.50)}€ for the menu.`); // result: 23.30€ -- for starter 2 & main dish 3 & dessert 4 & beverage 1

  // Student C
console.log(`After applying the 10% discount, student C has to pay: ${studentInvoice(6, 11, 7, 5.50)}€ for the menu.`); // result:27.10 € -- for starter 3 & main dish 4 & dessert 1 & beverage 2