
'use strict';

var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];



function Store(storeName, minCust, maxCust, avgPerCust){
  this.name = storeName;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgPerCust = avgPerCust;
  this.totalHourlySales = 0;
  this.projectedHourlySales = [];
};

// for  (var i = 0; i < storeHours.length; i++){
//    this.totalDailySales = 0
//    this.projectedHourlySales = []
// }

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

for(var j = 0; j < allStores.length; j++){
  allStores[j].hourlySales();
  allStores[j].totalSalesPerDay();
};

console.log(allStores);
var tData = '<td></td>';
function methodId(){
  var name;
  var el;
  var tdData2;
  var myRow2;

  console.log(storeHours.length);
  for(var k = 0; k < storeHours.length; k++){
    tData = tData + '<td>' + storeHours[k] + '</td>';
    console.log(tData);
  }
  tData = tData + '<td>' + 'total' + '</td>';
  return tData;
}

tData = methodId();
var el = document.getElementById('storeHours');
var myRow = document.createElement('tr');
myRow.innerHTML = tData;
el.appendChild(myRow);

for(var row = 0; row < allStores.length; row++){

  hours = allStores[row].projectedHourlySales;
  console.log(hours);
  total = allStores[row].totalDailySales;
  console.log(total);
  name = allStores[row].name;
  console.log (name);
  el = document.getElementById('allStores');
  tdData2 = '<td>' + name + '</td>';
  for(var col = 0; col < storeHours.length; col++){
    tdData2 = tdData2 + '<td>' + hours[col] + '</td>';
  }
  tdData2 = tdData2 + '<td>' + total + '</td>';
  myRow2 = document.createElement('tr');
  myRow2.innerHTML = tdData2;
  el.appendChild(myRow2);
}

tdData2 = '<td> TOTAL</td>' ;
for(var col = 0; col < storeHours.length; col++){
  total = 0;
  for(var row = 0; row < allStores.length; row++){
    total = total + allStores[row].projectedHourlySales[col];
  }
  tdData2 = tdData2 + '<td>' + total + '</td>';
}
tdData2 = tdData2 + '<td>' + ':)' + '</td>';
myRow2 = document.createElement('tr');
myRow2.innerHTML = tdData2;
el.appendChild(myRow2);

function generateStoreData(event){
  event.preventDefault();
  var theFormItself = event.target;
  var storeNameInput = theFormItself.elements['store-name-input'].value;
  var minCustomerInput = theFormItself.elements['min-cust-input'].value;
  var maxCustomerInput = theFormItself.elements['max-cust-input'].value;
  var avgCookiesInput = theFormItself.elements['avgCookies-input'].value;

  var formStore = new Store(storeNameInput, minCustomerInput, maxCustomerInput, avgCookiesInput);

  var footerTds = document.getElementById('footerElement').childNodes;
  for (var i = 1; i < footerTds.length - 1; i++) {
    footerTds[i].textContent = cookieHourTotals[i - 1];
  }
  footerTds[footerTds.length - 1].textContent = totalSum(cookieHourTotals);
  form.reset();
};
var form = document.getElementById('theForm');
form.addEventListener('submit', generateStoreData);
