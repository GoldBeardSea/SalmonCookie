'use strict';

var hours = ['location', '6 am:', '7 am', ' 8 am:' , '9 am:', '10 am: ', ' 11 am:', ' 12 pm:', '1 pm:', '2 pm:', '3 pm:', '4 pm:', '5 pm:', '6 pm:', '7 pm:', '8 pm:', ' Daily Location Total'];

// var firstP = document.getElementById('first');

// var firstPike = {
//   minCust: 23,
//   maxCust: 65,
//   avgSale: 6.3,
//   totalSale: 0,
//   salesByHour: [],
//   randCustHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   render:  function (){
//     for (var i = 0; i < hours.length; i++) {
//       var custPerHour = this.randCustHour();
//       var salesPerHour = Math.floor(custPerHour * this.avgSale);
//       console.log(custPerHour);
//       console.log(salesPerHour);
//       this.salesByHour.push(salesPerHour);


//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
//       firstP.appendChild(liEl);
//     }
//     this.totalCook();
//   },
//   totalCook: function() {
//     for (var i = 0; i < this.salesByHour.length; i++) {
//       this.totalSale += this.salesByHour[i];
//       console.log(this.totalSale);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
//     firstP.appendChild(liEl);

//   },

// };
// firstPike.render();

// var tacSea = document.getElementById('second');

// var seaTac = {
//   minCust: 3,
//   maxCust: 24,
//   avgSale: 1.2,
//   totalSale: 0,
//   salesByHour: [],
//   randCustHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   render:  function (){
//     for (var i = 0; i < hours.length; i++) {
//       var custPerHour = this.randCustHour();
//       var salesPerHour = Math.floor(custPerHour * this.avgSale);
//       console.log(custPerHour);
//       console.log(salesPerHour);
//       this.salesByHour.push(salesPerHour);


//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
//       tacSea.appendChild(liEl);
//     }
//     this.totalCook();
//   },
//   totalCook: function() {
//     for (var i = 0; i < this.salesByHour.length; i++) {
//       this.totalSale += this.salesByHour[i];
//       console.log(this.totalSale);
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
//     tacSea.appendChild(liEl);

//   },

// };
// seaTac.render();

// var seaCent = document.getElementById('third');

// var centSea = {
//   minCust: 11,
//   maxCust: 38,
//   avgSale: 3.7,
//   totalSale: 0,
//   salesByHour: [],
//   randCustHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var custPerHour = this.randCustHour();
//       var salesPerHour = Math.floor(custPerHour * this.avgSale);
//       this.salesByHour.push(salesPerHour);
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
//       seaCent.appendChild(liEl);
//     }
//     this.totalCook();
//   },
//   totalCook: function() {
//     for (var i = 0; i < this.salesByHour.length; i++) {
//       this.totalSale += this.salesByHour[i];
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
//     seaCent.appendChild(liEl);
//   },
// };
// centSea.render();

// var hillCap = document.getElementById('four');

// var capHill = {
//   minCust: 20,
//   maxCust: 38,
//   avgSale: 2.3,
//   totalSale: 0,
//   salesByHour: [],
//   randCustHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var custPerHour = this.randCustHour();
//       var salesPerHour = Math.floor(custPerHour * this.avgSale);
//       this.salesByHour.push(salesPerHour);
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
//       hillCap.appendChild(liEl);
//     }
//     this.totalCook();
//   },
//   totalCook: function() {
//     for (var i = 0; i < this.salesByHour.length; i++) {
//       this.totalSale += this.salesByHour[i];
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
//     hillCap.appendChild(liEl);
//   },
// };
// capHill.render();

var allSales = [];
var allStores = document.getElementById('sales');

function SalmonCookies(name, minCust, maxCust, avgSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.salesByHour = [];
  this.totalSale = 0;
  allSales.push(this);

}
function hoursGeneration () {
  for (var i = 0; i < hours.length; i++) {
    var thEl = document.createElement('th');
    thEl.textContent = hours[i];
    allStores.appendChild(thEl);
  }
}

SalmonCookies.prototype.randCustHour = function () {
  return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
};

SalmonCookies.prototype.populatingSales = function () {
  for (var i = 1; i < hours.length - 1; i++) {
    var custPerHour = this.randCustHour();
    var salesPerHour = Math.floor(custPerHour * this.avgSale);
    this.salesByHour.push(salesPerHour);
  }
  this.totalCook();
};

SalmonCookies.prototype.render = function () {
  var trElement = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = this.name;
  trElement.appendChild(thEl);

  for (var i = 0; i < this.salesByHour.length; i++) {
    var tdElement = document.createElement('td');
    tdElement.textContent = this.salesByHour[i];
    trElement.appendChild(tdElement);
  }
  tdElement = document.createElement('td');
  tdElement.textContent = this.totalSale;
  trElement.appendChild(tdElement);
  allStores.appendChild(trElement);
};


SalmonCookies.prototype.totalCook = function() {
  for (var i = 0; i < this.salesByHour.length; i++) {
    this.totalSale += this.salesByHour[i];
  }
  console.log(this.totalSale);
};

var firstAndPike = new SalmonCookies('First and Pike', 23, 65, 6.3);
var alkiBeach = new SalmonCookies('Alki Beach', 2, 16, 4.6);

console.log(alkiBeach);
alkiBeach.populatingSales();
firstAndPike.populatingSales();
hoursGeneration();
firstAndPike.render();
alkiBeach.render();




// var beAlki = document.getElementById('five');

// var alkiBe = {
//   minCust: 2,
//   maxCust: 16,
//   avgSale: 4.6,
//   totalSale: 0,
//   salesByHour: [],
//   randCustHour: function () {
//     return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
//   },
//   render: function () {
//     for (var i = 0; i < hours.length; i++) {
//       var custPerHour = this.randCustHour();
//       var salesPerHour = Math.floor(custPerHour * this.avgSale);
//       this.salesByHour.push(salesPerHour);
//       var liEl = document.createElement('li');
//       liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
//       beAlki.appendChild(liEl);
//     }
//     this.totalCook();
//   },
//   totalCook: function() {
//     for (var i = 0; i < this.salesByHour.length; i++) {
//       this.totalSale += this.salesByHour[i];
//     }
//     var liEl = document.createElement('li');
//     liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
//     beAlki.appendChild(liEl);
//   },
// };
// alkiBe.render();

