'use strict';

//create object literals for all stores.
var pikeStore = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  storeHours: [],
  totalDailySales: 0,

  hourlyCustomers: function(){
    var min = this.minCust;
    var max = this.maxCust;
    var avg = this.avgPerCust;
    var totalHourlySales = 0;
    var projectedHourlySales = [];

    for(var i = 0; i < this.storeHours.length; i++);

    var projectedCustomers = Math.floor(Math.random)()*(max-min)+min;
    projectedHourlySales.push(Math.ceil(hourlyCustomers*avg));

    console.log(projectedHourlySales);

  totalSalesPerDay = function() {
  var total = 0;
  for(var j = 0; j < this.projectedHourlySales.length; j++){
    total = total + this.projectedHourlySales[j];
  }
  console.log(total);
  this.totalDailySales = total;
  return total;
}

  }
totalHourlySales: function()
};
console.log(pikeStore);

var seatacAirport = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
  storeHours: []
};
console.log(seatacAirport);

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
  storeHours:[]
};
console.log(seattleCenter);

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
  storeHours:[]
};
console.log(capitolHill);

var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
  storeHours:[]
};
console.log(alki);

//create an array of store hours for my loop to filter through to project hourly sales
storeHours: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];


//create a function
// hourlyCustomers: function(){
//   var min = this.minCust;
//   var max = this.maxCust;
//   var avg = this.avgPerCust;
//   var totalHourlySales = 0;
//   var projectedHourlySales = [];
//
//   for(var i = 0; i < this.storeHours.length; i++);
//
//   var projectedCustomers = Math.floor(Math.random)()*(max-min)+min;
//   projectedHourlySales.push(Math.ceil(hourlyCustomers*avg))
//
// }
