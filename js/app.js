'use strict';
//below are global variables
var hours = ['location', '6 am:', '7 am', ' 8 am:' , '9 am:', '10 am: ', ' 11 am:', ' 12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:', '6 pm:', '7 pm:', '8 pm:', ' Daily Location Total'];
var allSales = [];
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
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    allStores.appendChild(thEl);
  }
}

// function to calculate random integer between min and max
SalmonCookies.prototype.randCustHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
};

//this creates sales by hour
SalmonCookies.prototype.populatingSales = function () {
  for (var i = 1; i < hours.length - 1; i++) {
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



var firstAndPike = new SalmonCookies('First and Pike', 23, 65, 6.3);
var seaTac = new SalmonCookies ('Seatac', 3, 24, 1.2);
var seaCent = new SalmonCookies ('Seattle Center', 11, 38, 3.7);
var capHill = new SalmonCookies ('Capitol Hill', 20, 38, 2.3);
var alkiBeach = new SalmonCookies('Alki Beach', 2, 16, 4.6);

console.log(alkiBeach);
firstAndPike.populatingSales();
seaTac.populatingSales();
seaCent.populatingSales();
capHill.populatingSales();
alkiBeach.populatingSales();

hoursGeneration();

firstAndPike.renderTable();
seaTac.renderTable();
seaCent.renderTable();
capHill.renderTable();
alkiBeach.renderTable();

function handleSalesFormSubmitted(event) {
  // stop the page from refreshing
  event.preventDefault();
  console.log('the form was submitted!');
  var formElement = event.target;
  var newStore = new SalmonCookies(formElement.name.value, Number(formElement.minCust.value), Number(formElement.maxCust.value), Number(formElement.avgSale.value));
  console.log(newStore);
  newStore.populatingSales();
  newStore.renderTable();
  //(formElement.name, minCust, maxCust, avgSale);
}
var salesFormElement = document.getElementById('add-store-form');
salesFormElement.addEventListener('submit', handleSalesFormSubmitted);