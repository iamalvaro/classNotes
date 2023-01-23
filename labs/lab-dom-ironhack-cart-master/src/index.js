// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector(".price span");
  const quantity = product.querySelector(".quantity input");
  let valueSum = price.innerHTML * quantity.value;
  const subtotal = product.querySelector(".subtotal span");
  subtotal.innerHTML = valueSum;
  return subtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  const allProducts = document.querySelectorAll('.product');
  const sumAllProducts = allProducts.forEach(product => updateSubtotal(product));
  
  // ITERATION 3
   const totalValue = document.querySelector("#total-value span");
   console.log(sumAllProducts);

    //BEST OPTION BUT IT DOESNT WORK
   const productTotalValue = document.querySelectorAll(".subtotal span");
  //  totalValue.innerHTML = productTotalValue.reduce(
  //   (a , b) => +a + +b, 0);
  //Alternative loop
  for (let i = 0; i < productTotalValue.length; i++) {
   return totalValue.innerHTML = +productTotalValue[i].innerHTML + +productTotalValue[i+1].innerHTML;    
  }
  //  const addedValueOne = document.querySelectorAll(".subtotal span")[0].innerHTML;
  //  const addedValueTwo = document.querySelectorAll(".subtotal span")[1].innerHTML;
  //  console.log(addedValueOne, addedValueTwo);
  //  totalValue.innerHTML = +addedValueOne + +addedValueTwo;
    
}

// ITERATION 4

const removeButtons = document.querySelectorAll(".btn-remove");
removeButtons.forEach(buttons => {
  buttons.addEventListener("click", (removeProduct))
});

function removeProduct(event) {
  const target = event.currentTarget.parentElement;
  console.log('The target in remove is:', target);
  target.parentElement.remove();
  
  
  calculateAll();

 
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
