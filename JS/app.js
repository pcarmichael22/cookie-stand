'use strict';
// store data input

// location / Min customer / Max Customer / Avg Cookie/sale

// 1st and Pike / 23 / 65 / 6.3
// SeaTac Airport / 3 / 24 / 1.2
// Seattle Center / 11 / 38 / 3.7
// Capitol Hill / 20 / 38 / 2.3
// Alki / 2 /16 /4.6

// pseudo code : 

// in: customer min/max and avg cookie
// out: list of cookies per hour and total

// total = 0
// for 6am - 8pm
// # sales/hr = RandomSource(min,max)
// #cookies/hr = # sales/hr * avg cookies/sale

// totalCookies += cookie/hr

// REWRITE FOR CLASS 7

'use strict';

//ARRAY OF HOURS

// var ulSeaTac = document.getElementById('seaTac');
// var ulSeaCenter = document.getElementById('seaCent');
// var ulCapHill = document.getElementById('capHil');
// var ulAlki = document.getElementById('alkBea');

//OBJECT LITERALS FOR EACH STORE

//INSTANCES
var table = document.getElementById('table');
var stores = [];
stores.push(new Store('First and Pike', 23, 65, 6.3, table));
stores.push(new Store('SeaTac', 3, 24, 1.2, table));
stores.push(new Store('Seattle Center', 11, 38, 3.7, table));
stores.push(new Store('Capitol Hill', 20, 38, 2.3, table));
stores.push(new Store('Alki', 2, 16, 4.6, table));

for (var i = 0; i < stores.length; i++) {
    if (i === 0) {
        stores[i].makeHeader();
    }
    stores[i].render();
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};







//Helper function
//got this function from MDN - math.random() doc

//MIN CUSTOMERS PER HOUR
//MAX CUSTOMERS PER HOUR
//AVG COOKIES SOLD PER CUSTOMER

//FOR EACH HOUR:
//NEED TO MAKE AN ARRAY OF CUSTOMERS EACH HOUR
//NEED TO MAKE AN RANDOM NUMBER BETWEEN MIN AND MAX
//NEED TO MAKE AN ARRAY OF COOKIES SOLD EACH HOUR
//MULTIPLY CUSTOMERS EACH HOUR BY AVERAGE COOKIE SALES
//RENDER THIS TO THE DOM
//FIND TOTAL COOKIES
//RENDER TOTAL TO THE DOM