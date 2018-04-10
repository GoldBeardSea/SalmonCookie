var hours = ['6 am:', '7 am', ' 8 am:' , '9 am:', '10 am: ', ' 11 am:', ' 12 pm:', '1 pm', '2 pm', '3 pm:', '4 pm:', '5 pm:', '6 pm:', '7 pm:', '8 pm:', '9 pm:'];

var firstP = document.getElementById('first');

var firstPike = {
  minCust: 23,
  maxCust: 65,
  avgSale: 6.3,
  totalSale: 0,
  salesByHour: [],
  randCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  render:  function (){
    for (var i = 0; i < hours.length; i++) {
      var custPerHour = this.randCustHour();
      var salesPerHour = Math.floor(custPerHour * this.avgSale);
      console.log(custPerHour);
      console.log(salesPerHour);
      this.salesByHour.push(salesPerHour);


      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
      firstP.appendChild(liEl);
    }
    this.totalCook();
  },
  totalCook: function() {
    for (var i = 0; i < this.salesByHour.length; i++) {
      this.totalSale += this.salesByHour[i];
      console.log(this.totalSale);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
    firstP.appendChild(liEl);

  },

};
firstPike.render();

var tacSea = document.getElementById('second');

var seaTac = {
  minCust: 3,
  maxCust: 24,
  avgSale: 1.2,
  totalSale: 0,
  salesByHour: [],
  randCustHour: function () {
    return Math.floor(Math.random() * (this.maxCust - this.minCust)+ this.minCust);
  },
  render:  function (){
    for (var i = 0; i < hours.length; i++) {
      var custPerHour = this.randCustHour();
      var salesPerHour = Math.floor(custPerHour * this.avgSale);
      console.log(custPerHour);
      console.log(salesPerHour);
      this.salesByHour.push(salesPerHour);


      var liEl = document.createElement('li');
      liEl.textContent = hours[i] + this.salesByHour[i] + ' cookies.';
      tacSea.appendChild(liEl);
    }
    this.totalCook();
  },
  totalCook: function() {
    for (var i = 0; i < this.salesByHour.length; i++) {
      this.totalSale += this.salesByHour[i];
      console.log(this.totalSale);
    }
    var liEl = document.createElement('li');
    liEl.textContent = 'Total: ' + this.totalSale + ' cookies.';
    tacSea.appendChild(liEl);

  },

};
seaTac.render();



