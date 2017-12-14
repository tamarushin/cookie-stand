'use strict';

var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
//create an array of store hours for my loop to filter through to project hourly sales and customers per hour.

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
      this.custEachHour.push(random(this.minCust,this.maxCust));//set up a function that will push the min/max customers each hour into my function random.
    }
  },
  calcCookiesEachHour: function(){//create a function that calculates cookiesEachHour
    this.calcCustsEachHour(); //use 'this' to call the custEachHour if inside the pikeStore container.
    for(var i = 0; i < hours.length; i++){ //loop thru hours
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgPerCust);//create a var I named oneHour and set it equal to a math equation that goes through an empty array and multiplies it to 6.3 avg. cookie per customer per hour.
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      //push my cookies sold each hour into my var oneHour to do the math.
      this.totalDailySales += oneHour;
      //calculate totalDailySales by adding it to the cookies sold in the next hour.
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('pike');
    //We are going to render an output. create a var listContainer is a container in HTML that will be named the store name. HTML has the ID of store name 'pike' etc.
    var myUl = document.createElement('ul');
    //create a container for my unordered list
    listContainer.appendChild(myUl);
    //put myUL into the listContainer
    var firstListItem = document.createElement('li');
    //create a container for my lists
    this.calcCookiesEachHour();
    //render my math for cookiesEachHour
    firstListItem.innerHTML = this.cookiesEachHour + ' ' + this.totalDailySales;
    //render my numbers
    myUl.appendChild(firstListItem);
    //I know this puts my firstListItem into the Ul contsiner, but this one is confusing.

  }
};
pikeStore.render();


var seatacAirport = {
  storeName: 'SeaTac Airport',
  minCust: 3,
  maxCust: 24,
  avgPerCust: 1.2,
  storeHours: [],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCustsEachHour: function(){
    for(var i = 0; i < hours.length; i++){
      this.custEachHour.push(random(this.minCust,this.maxCust));//set up a function that will push the min/max customers each hour into my function random.
    }
  },
  calcCookiesEachHour: function(){//create a function that calculates cookiesEachHour
    this.calcCustsEachHour(); //use 'this' to call the custEachHour if inside the pikeStore container.
    for(var i = 0; i < hours.length; i++){ //loop thru hours
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgPerCust);//create a var I named oneHour and set it equal to a math equation that goes through an empty array and multiplies it to 6.3 avg. cookie per customer per hour.
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      //push my cookies sold each hour into my var oneHour to do the math.
      this.totalDailySales += oneHour;
      //calculate totalDailySales by adding it to the cookies sold in the next hour.
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('seatac');
    //We are going to render an output. create a var listContainer is a container in HTML that will be named the store name. HTML has the ID of store name 'pike' etc.
    var myUl = document.createElement('ul');
    //create a container for my unordered list
    listContainer.appendChild(myUl);
    //put myUL into the listContainer
    var firstListItem = document.createElement('li');
    //create a container for my lists
    this.calcCookiesEachHour();
    //render my math for cookiesEachHour
    firstListItem.innerHTML = this.cookiesEachHour + ' ' + this.totalDailySales;
    //render my numbers
    myUl.appendChild(firstListItem);
    //I know this puts my firstListItem into the Ul contsiner, but this one is confusing.

  }
};
seatacAirport.render();

var seattleCenter = {
  storeName: 'Seattle Center',
  minCust: 11,
  maxCust: 38,
  avgPerCust: 3.7,
  storeHours:[],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCookiesEachHour: function(){//create a function that calculates cookiesEachHour
    this.calcCustsEachHour(); //use 'this' to call the custEachHour if inside the pikeStore container.
    for(var i = 0; i < hours.length; i++){ //loop thru hours
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgPerCust);//create a var I named oneHour and set it equal to a math equation that goes through an empty array and multiplies it to 6.3 avg. cookie per customer per hour.
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      //push my cookies sold each hour into my var oneHour to do the math.
      this.totalDailySales += oneHour;
      //calculate totalDailySales by adding it to the cookies sold in the next hour.
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('sc');
    //We are going to render an output. create a var listContainer is a container in HTML that will be named the store name. HTML has the ID of store name 'pike' etc.
    var myUl = document.createElement('ul');
    //create a container for my unordered list
    listContainer.appendChild(myUl);
    //put myUL into the listContainer
    var firstListItem = document.createElement('li');
    //create a container for my lists
    this.calcCookiesEachHour();
    //render my math for cookiesEachHour
    firstListItem.innerHTML = this.cookiesEachHour + ' ' + this.totalDailySales;
    //render my numbers
    myUl.appendChild(firstListItem);
    //I know this puts my firstListItem into the Ul contsiner, but this one is confusing.

  }
};
seattleCenter.render();

var capitolHill = {
  storeName: 'Capitol Hill',
  minCust: 20,
  maxCust: 38,
  avgPerCust: 2.3,
  storeHours:[],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCookiesEachHour: function(){//create a function that calculates cookiesEachHour
    this.calcCustsEachHour(); //use 'this' to call the custEachHour if inside the pikeStore container.
    for(var i = 0; i < hours.length; i++){ //loop thru hours
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgPerCust);//create a var I named oneHour and set it equal to a math equation that goes through an empty array and multiplies it to 6.3 avg. cookie per customer per hour.
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      //push my cookies sold each hour into my var oneHour to do the math.
      this.totalDailySales += oneHour;
      //calculate totalDailySales by adding it to the cookies sold in the next hour.
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('cap-hill');
    //We are going to render an output. create a var listContainer is a container in HTML that will be named the store name. HTML has the ID of store name 'pike' etc.
    var myUl = document.createElement('ul');
    //create a container for my unordered list
    listContainer.appendChild(myUl);
    //put myUL into the listContainer
    var firstListItem = document.createElement('li');
    //create a container for my lists
    this.calcCookiesEachHour();
    //render my math for cookiesEachHour
    firstListItem.innerHTML = this.cookiesEachHour + ' ' + this.totalDailySales;
    //render my numbers
    myUl.appendChild(firstListItem);
    //I know this puts my firstListItem into the Ul contsiner, but this one is confusing.

  }
};
capitolHill.render();

var alki = {
  storeName: 'Alki',
  minCust: 2,
  maxCust: 16,
  avgPerCust: 4.6,
  storeHours:[],
  cookiesEachHour: [],
  totalDailySales: 0,
  calcCookiesEachHour: function(){//create a function that calculates cookiesEachHour
    this.calcCustsEachHour(); //use 'this' to call the custEachHour if inside the pikeStore container.
    for(var i = 0; i < hours.length; i++){ //loop thru hours
      var oneHour = Math.ceil(this.custEachHour[i] * this.avgPerCust);//create a var I named oneHour and set it equal to a math equation that goes through an empty array and multiplies it to 6.3 avg. cookie per customer per hour.
      console.log(oneHour, 'each hour');
      this.cookiesEachHour.push(oneHour);
      //push my cookies sold each hour into my var oneHour to do the math.
      this.totalDailySales += oneHour;
      //calculate totalDailySales by adding it to the cookies sold in the next hour.
      console.log(this.totalDailySales, 'total');
    }
  },
  render: function(){
    var listContainer = document.getElementById('alki');
    //We are going to render an output. create a var listContainer is a container in HTML that will be named the store name. HTML has the ID of store name 'pike' etc.
    var myUl = document.createElement('ul');
    //create a container for my unordered list
    listContainer.appendChild(myUl);
    //put myUL into the listContainer
    var firstListItem = document.createElement('li');
    //create a container for my lists
    this.calcCookiesEachHour();
    //render my math for cookiesEachHour
    firstListItem.innerHTML = this.cookiesEachHour + ' ' + this.totalDailySales;
    //render my numbers
    myUl.appendChild(firstListItem);
    //I know this puts my firstListItem into the Ul contsiner, but this one is confusing.

  }
};
alki.render();
