const detailsButton = document.getElementById("detail-submit-btn");

detailsButton.addEventListener("click", function () {
  const buyerDetails = document.getElementById("buyer-details-input");

  document.getElementById("buyer-info").innerText = buyerDetails.value;
  buyerDetails.value = "";
});

const addProductBtn = document.getElementById("add-details-btn");

addProductBtn.addEventListener("click", () => {
  const infoTable = document.getElementById("info-table");
  const itemName = document.getElementById("item-name-input");
  const itemPrice = document.getElementById("item-price-input");
  const itemQuantity = document.getElementById("item-quantity-input");
 console.log(itemPrice.value);
 if (itemName.value=='' || itemPrice.value<0 || itemQuantity.value<0||itemPrice.value =='' || itemQuantity.value=="") {
   console.log('sdasd')
   return
 }
  
  const totalPrice = parseInt(itemPrice.value) * parseInt(itemQuantity.value);

  const tr = document.createElement("tr");
  const th = document.createElement("th");
  const td1 = document.createElement("td");
  const td2 = document.createElement("td");
  const td3 = document.createElement("td");
  // //new code
  //  const td4 = document.createElement("td");
  // //  end



  td3.classList.add('item-total')
  th.innerText = itemName.value;
  td1.innerText = itemPrice.value;
  td2.innerText = itemQuantity.value;
  td3.innerText = totalPrice;
  

  tr.appendChild(th);
  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  
  infoTable.appendChild(tr);
totalCalculation()

});



function p(param){
  return document.createElement(param);
}


function totalCalculation(){

const subtotal = calculateSubTotal()
const subtotalToDisplay = document.getElementById("sub-total");
subtotalToDisplay.innerText=subtotal

let tax = subtotal * 0.2;
document.getElementById('tax').innerText=tax.toFixed(2)
document.getElementById('grand-total').innerText= subtotal+tax
document.getElementById('grand-total-2').innerText= subtotal+tax


}


function calculateSubTotal(){

let subtotal=0

let costs = document.getElementsByClassName("item-total");

for (let i = 0; i < costs.length; i++) {
    const element = costs[i];
    const price=parseInt(element.innerText)
    subtotal= subtotal+price
}
return subtotal
}


// new code 

