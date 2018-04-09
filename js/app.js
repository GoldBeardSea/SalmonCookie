var hours = ['6 am', '7 am', ' 8 am' , '9 am', '10 am ', ' 11 am', ' 12 pm', '1 pm', '2 pm', '3 pm', '4 pm', '5 pm', '6 pm', '7 pm', '8 pm', '9 pm'];

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
for (var i = 0; i < hours.length; i++) {
  var liEl = document.createElement('li');
  liEl.textContent = hours[i];
  firstP.appendChild(liEl);
}