'use strict';
//
// //create an array of store hours for my loop to filter through to project hourly sales and customers per hour.
var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//
// var seatacAirport = {
//   storeName: 'SeaTac Airport',
//   minCust: 3,
//   maxCust: 24,
//   avgPerCust: 1.2,
//   storeHours: []
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++);
//       this.custEachHour.push(random(this.min.custEachHour,this.maxCustEachHour));
//   }
// };
// console.log(seatacAirport);
//
// function random(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive like the number line Sam did in class. via MDN docs
//
// calcCookiesEachHour: function(){
//   this.calcCustsEachHour();
//   for(var i = 0; i < hours.length; i++){
//     var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
//     console.log(oneHour, 'each hour');
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailySales += oneHour;
//     console.log(this.totalDailySales, 'total');
//     }
//   }
// }
// render: function(){
//   var ulElement = document.getElementById('SeaTac Airport');
//   // access the element in the DOM where our stuff will go. then create the stuff we are going to put in the DOM.
//   console.log(ulElement, 'ulElement');
// //create an element
// for var (i = 0; i < hours.length; i++){
// var liElement = document.createElement();
// }
//   //give it content
//   liElement.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
//   //append child to the parent
//   ulElement.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.textContent = 'Total: ' + this.TotalSales + ' cookies';
//   ulElement.appendChild(liElement);
//   }
// }
// seatacAirport.render();
//
//
// var seattleCenter = {
//   storeName: 'Seattle Center',
//   minCust: 11,
//   maxCust: 38,
//   avgPerCust: 3.7,
//   storeHours:[]
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++);
//       this.custEachHour.push(random(this.min.custEachHour,this.maxCustEachHour));
//     }
// };
// console.log(seattleCenter);
//
// function random(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive like the number line Sam did in class. via MDN docs
//
// calcCookiesEachHour: function(){
//   this.calcCustsEachHour();
//   for(var i = 0; i < hours.length; i++){
//     var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
//     console.log(oneHour, 'each hour');
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailySales += oneHour;
//     console.log(this.totalDailySales, 'total');
//     }
//   }
// }
// render: function(){
//   var ulElement = document.getElementById('Seattle Center');
//   // access the element in the DOM where our stuff will go. then create the stuff we are going to put in the DOM.
//   console.log(ulElement, 'ulElement');
// //create an element
// for var (i = 0; i < hours.length; i++){
// var liElement = document.createElement();
// }
//   //give it content
//   liElement.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
//   //append child to the parent
//   ulElement.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.textContent = 'Total: ' + this.TotalSales + ' cookies';
//   ulElement.appendChild(liElement);
//   }
// }
// seattleCenter.render();
//
//
//
// var capitolHill = {
//   storeName: 'Capitol Hill',
//   minCust: 20,
//   maxCust: 38,
//   avgPerCust: 2.3,
//   storeHours:[]
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++);
//       this.custEachHour.push(random(this.min.custEachHour,this.maxCustEachHour));
//   }
// };
// console.log(capitolHill);
//
// function random(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive like the number line Sam did in class. via MDN docs
//
// calcCookiesEachHour: function(){
//   this.calcCustsEachHour();
//   for(var i = 0; i < hours.length; i++){
//     var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
//     console.log(oneHour, 'each hour');
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailySales += oneHour;
//     console.log(this.totalDailySales, 'total');
//     }
//   }
// }
// render: function(){
//   var ulElement = document.getElementById('Capitol Hill');
//   // access the element in the DOM where our stuff will go. then create the stuff we are going to put in the DOM.
//   console.log(ulElement, 'ulElement');
// //create an element
// for var (i = 0; i < hours.length; i++){
// var liElement = document.createElement();
// }
//   //give it content
//   liElement.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
//   //append child to the parent
//   ulElement.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.textContent = 'Total: ' + this.TotalSales + ' cookies';
//   ulElement.appendChild(liElement);
//   }
// }
// capitolHill.render();
//
//
// var alki = {
//   storeName: 'Alki',
//   minCust: 2,
//   maxCust: 16,
//   avgPerCust: 4.6,
//   storeHours:[]
//   cookiesEachHour: [],
//   totalDailySales: 0,
//   calcCustsEachHour: function(){
//     for(var i = 0; i < hours.length; i++);
//       this.custEachHour.push(random(this.min.custEachHour,this.maxCustEachHour));
//   }
// };
// console.log(alki);
//
// function random(min, max){
//   return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive like the number line Sam did in class. via MDN docs
//
// calcCookiesEachHour: function(){
//   this.calcCustsEachHour();
//   for(var i = 0; i < hours.length; i++){
//     var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
//     console.log(oneHour, 'each hour');
//     this.cookiesEachHour.push(oneHour);
//     this.totalDailySales += oneHour;
//     console.log(this.totalDailySales, 'total');
//     }
//   }
// }
// render: function(){
//   var ulElement = document.getElementById('Alki');
//   // access the element in the DOM where our stuff will go. then create the stuff we are going to put in the DOM.
//   console.log(ulElement, 'ulElement');
// //create an element
// for var (i = 0; i < hours.length; i++){
// var liElement = document.createElement();
// }
//   //give it content
//   liElement.textContent = hours[i] + ': ' + this.cookiesEachHour[i] + 'cookies';
//   //append child to the parent
//   ulElement.appendChild(liElement);
//   }
//   liElement = document.createElement('li');
//   liElement.textContent = 'Total: ' + this.TotalSales + ' cookies';
//   ulElement.appendChild(liElement);
//   }
// }
// alki.render();
//
/////////////////////////////////////////////////////////////////////
function random(min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive like the number line Sam did in class. via MDN docs
}

var pikeStore = {
  storeName: '1st and Pike',
  minCust: 23,
  maxCust: 65,
  avgPerCust: 6.3,
  custEachHour: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custEachHour.push(random(this.min.custEachHour,this.maxCustEachHour));
    }
  },
  calcCookiesEachHour: function(){
    this.calcCustsEachHour();
    for(var i = 0; i < hours.length; i++){
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgCookiesPerCust);
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      this.totalDailySales += oneHour;
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('pike');
    var myUl = document.createElement('ul');
    listContainer.appendChild(myUl);
    var firstListItem = document.createElement('li');
    firstListItem.innerHTML = 'pike place market';
    myUl.appendChild(firstListItem);
    pikeStore.render();
  }
};
var alkiStore = new Store('Alki Store', 2, 16, 4.6);
var pikeStore = new Store('1st and Pike', 23, 65, 6.3);
var seatacStore = new Store('Seatac Airport', 3, 24, 1.2);
var seattleCenter = new Store('Seattle Center', 11, 38, 3.7);
var capitolHill = new Store('Capitol Hill', 20, 38, 2.3)

allStores.push(alkiStore);
allStores.push(pikeStore);
allStores.push(seatacStore);
allStores.push(seattleCenter);
allStores.push(capitolHill);

for(var j = 0; j < allStores.length; j++){
 allStores[j].hourlySales();
 allStores[j].totalSalesPerDay();
}

console.log(allStores)

// var myList = document.createElement('ul');
//
// //<ul></ul>
//
// var firstListItem = document.createElement('li');
//
// //<li></li>
//
// firstListItem.innerHTML = 'this is the first list item';
//
// //<li>this is the first list item</li>
//
//
// myList.appendChild(firstListItem)


//<ul>
  //<li>this is the first list item</li>
//</ul>
//
// var listContainer = document.getElementById('pike');
// var myUl = document.createElement('ul');
// listContainer.appendChild(myUl);
// var firstListItem = document.createElement('li');
// firstListItem.innerHTML = 'pike place market';
// myUl.appendChild(firstListItem);



// var myUl = document.createElement('ul')
// var myContainer = document.getElementById('lists')
// myContainer.appendChild(myUl)
