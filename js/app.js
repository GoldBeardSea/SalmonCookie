var hours = [6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];

var firstP = document.getElementById('first');

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customerArr: [],
  salesByHour: [],
  customerCalc: 0,
  randCustHour: function () {
    this.customerCalc = Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
};
for ( i = 0, i > hours.length, i++); {
var liEl = document.createElement('li');
liEl.textContent = hours[i];
firstP.appendChild(liEl);
}