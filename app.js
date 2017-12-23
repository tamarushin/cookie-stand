'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

//object constructor
function Store(storeName, minCust, maxCust, avgPerCust){
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.totalHourlySales = 0;
  this.projectedHourlySales = [];
};

Store.prototype.randomCustGenerator = function(){
  var random =  Math.round(Math.random() * (this.maxCust - this.minCust));
  return random;
};

Store.prototype.hourlySales = function(){
  var random;
  for(var i = 0; i < storeHours.length; i++){
    random = this.randomCustGenerator();
    this.projectedHourlySales.push(Math.round(random * this.avgPerCust));
  };
  console.log(this);
};
//created a store prototype function to calculate total sales perday. created a loop to loop through hours array and calculate total sales per day.
Store.prototype.totalSalesPerDay = function(){
  var total = 0;
  for(var j = 0; j < this.projectedHourlySales.length; j++){
    total = total + this.projectedHourlySales[j];
  }
  console.log(total);
  this.totalDailySales = total;
  return total;
};
var allStores = [];

//object constructors
var alkiStore = new Store('Alki Store', 2, 16, 4.6);
var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacStore = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3);

allStores.push(alkiStore);
allStores.push(pikeStore);
allStores.push(seatacStore);
allStores.push(seattleCenter);
allStores.push(capitolHill);

console.log('all stores:', allStores);

var tData = '<td></td>';
function methodId(){


  console.log(storeHours.length);
  for(var k = 0; k < storeHours.length; k++){
    tData = tData + '<td>' + storeHours[k] + '</td>';
    // console.log(tData);
  }
  tData = tData + '<td>' + 'total' + '</td>';
  return tData;
}

tData = methodId();
var el = document.getElementById('storeHours');
var myRow = document.createElement('tr');
myRow.innerHTML = tData;
el.appendChild(myRow);

function makeTable(){
  for(var j = 0; j < allStores.length; j++){
    allStores[j].hourlySales();
    allStores[j].totalSalesPerDay();
  }
  for(var row = 0; row < allStores.length; row++){

    var hours = allStores[row].projectedHourlySales;
    console.log('here it is', hours);
    var total = allStores[row].totalDailySales;
    console.log(total);
    var name = allStores[row].name;
    console.log (name);
    el = document.getElementById('allStores');
    tdData2 = '<td>' + name + '</td>';
    for(var col = 0; col < storeHours.length; col++){
      tdData2 = tdData2 + '<td>' + hours[col] + '</td>';
    }
    console.log('where are the numbers', tdData2);
    tdData2 = tdData2 + '<td>' + total + '</td>';
    myRow2 = document.createElement('tr');
    myRow2.innerHTML = tdData2;
    el.appendChild(myRow2);
  }
  console.log('HELLO');
  var tdData2 = '<td> TOTAL</td>' ;
  for(col = 0; col < storeHours.length; col++){
    total = 0;
    for (row = 0; row < allStores.length; row++){
      total = total + allStores[row].projectedHourlySales[col];
    }
    console.log('total', total);
    tdData2 = tdData2 + '<td>' + total + '</td>';
  }
  tdData2 = tdData2 + '<td>' + ':)' + '</td>';
  var myRow2 = document.createElement('tr');
  myRow2.innerHTML = tdData2;
  var el = document.getElementById('allStores');
  el.appendChild(myRow2);
}
makeTable();
function generateStoreData(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeNameInput = theFormItself.elements['store-name-input'].value;
  var minCustomerInput = theFormItself.elements['min-cust-input'].value;
  var maxCustomerInput = theFormItself.elements['max-cust-input'].value;
  var avgCookiesInput = theFormItself.elements['avgCookies-input'].value;
  console.log('THE FORM', maxCustomerInput, avgCookiesInput);
  var formStore = new Store(storeNameInput, minCustomerInput, maxCustomerInput, avgCookiesInput);
  allStores.push(formStore);
  console.log('Stores', allStores);
  document.getElementById('allStores').innerHTML = '';
  makeTable();

};
var form = document.getElementById('theForm');
form.addEventListener('submit', generateStoreData);
