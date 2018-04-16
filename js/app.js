'use strict';
//below are global variables
var hours = [ '6 am', '7 am', ' 8 am' , '9 am', '10 am ', ' 11 am', ' 12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm'];
var allSales = [];
var allStoresColumns = [];
var allStores = document.getElementById('sales');
//below is main constructor
function SalmonCookies(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesByHour = [];
  this.totalSale = 0;
  allSales.push(this);
}
// generates a table to populate hours array
function hoursGeneration () {
  var thEl = document.createElement('th');
  thEl.textContent = 'Location';
  allStores.appendChild(thEl);

  for (var i = 0; i < hours.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = hours[i];
    allStores.appendChild(thEl);
  }
  thEl = document.createElement('th');
  thEl.textContent = 'Daily Total';
  allStores.appendChild(thEl);
}
// function to calculate random integer between min and max
SalmonCookies.prototype.randCustHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
};
//this creates sales by hour
SalmonCookies.prototype.populatingSales = function () {
  for (var i = 0; i < hours.length; i++) {
    var custPerHour = this.randCustHour();
    var salesPerHour = Math.floor(custPerHour * this.avgSale);
    this.salesByHour.push(salesPerHour);
  }
  this.totalCook();
};
//below is function that builds the table header containing name
SalmonCookies.prototype.renderTable = function () {
  var trElement = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trElement.appendChild(thEl);
  // below is for loop that builds table based on array length and populates sale by hour
  for (var i = 0; i < this.salesByHour.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.salesByHour[i];
    trElement.appendChild(tdElement);
  }
  // below adds table elements to end to populate total sale
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalSale;
  trElement.appendChild(tdElement);
  allStores.appendChild(trElement);
};
// Below is the total cookies needed function
SalmonCookies.prototype.totalCook = function() {
  for (var i = 0; i < this.salesByHour.length; i++) {
    this.totalSale += this.salesByHour[i];
  }
  console.log(this.totalSale);
};

new SalmonCookies('First and Pike', 23, 65, 6.3);
new SalmonCookies ('Seatac', 3, 24, 1.2);
new SalmonCookies ('Seattle Center', 11, 38, 3.7);
new SalmonCookies ('Capitol Hill', 20, 38, 2.3);
new SalmonCookies('Alki Beach', 2, 16, 4.6);

// console.log(alkiBeach);
// firstAndPike.populatingSales();
// seaTac.populatingSales();
// seaCent.populatingSales();
// capHill.populatingSales();
// alkiBeach.populatingSales();

hoursGeneration();

// firstAndPike.renderTable();
// seaTac.renderTable();
// seaCent.renderTable();
// capHill.renderTable();
// alkiBeach.renderTable();


function callAll () {
  for (var i = 0; i < allSales.length ; i++) {
    allSales[i].populatingSales();
    allSales[i].renderTable();

  }
}
callAll();


function handleSalesFormSubmitted(event) {
  event.preventDefault();
  var formElement = event.target;
  var newStore = new SalmonCookies(formElement.name.value, Number(formElement.minCust.value), Number(formElement.maxCust.value), Number(formElement.avgSale.value));
  console.log(newStore);
  document.getElementById('sales').deleteRow(-1);
  newStore.populatingSales();
  newStore.renderTable();
  allStoresColumns = [];
  calculateColumns();
  renderColumnTotalTable();

}
var salesFormElement = document.getElementById('add-store-form');
salesFormElement.addEventListener('submit', handleSalesFormSubmitted);

function calculateColumns () {
// var columnSalesArray = [this.firstAndPike.salesByHour[], this.seaTac.salesByHour[], this.seaCent.salesByHour[], this.capHill.salesByHour[], this.alkiBeach.salesByHour[]];
// var salesArrayTotal = [];
  for(var i = 0; i < hours.length; i++){
    var storeTotal = 0;
    for(var j = 0; j < allSales.length ; j++){
      storeTotal += allSales[j].salesByHour[i];
    }
    allStoresColumns.push(storeTotal);
  }
}
calculateColumns();


function renderColumnTotalTable () {
  var allStoresGrandTotal = 0;
  var trElement = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Hourly Total';
  trElement.appendChild(thEl);
  // below is for loop that builds table based on array length and populates sale by hour
  for (var i = 0; i < allStoresColumns.length ; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = allStoresColumns[i];
    trElement.appendChild(tdElement);
    allStoresGrandTotal += allStoresColumns[i];
  }
  // below adds table elements to end to populate total sale
  tdElement = document.createElement('td');
  tdElement.textContent = allStoresGrandTotal;
  trElement.appendChild(tdElement);
  allStores.appendChild(trElement);
}
renderColumnTotalTable();


// function callAll () {
//   for (var i = 0; i < allSales; i++)
//     allSales[i].populatingSales();
//   allSales[i].renderTable();
//   allSales[i].calculateColumns();
// }
// callAll();

// var th = document.createElement
//
