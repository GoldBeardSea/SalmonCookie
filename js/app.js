var hours = [6, 7, 8 , 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

var firstPike {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  customerArr: []
  salesByHour: [],
  randCustHour: function randomCust(min, max) {
    return Math.floor(Math.random() * (this.maxCust-minCust)+minCust);
  },


  
}