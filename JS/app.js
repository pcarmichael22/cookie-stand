'use strict';

// var seaTac = {
//     minCust: 3,
//     maxCust: 24,
//     avgCookie: 1.2
// }

// var seaCent = {
//     minCust: 11,
//     maxCust: 38,
//     avgCookie: 3.7
// }

// var capHill = {
//     minCust: 20,
//     maxCust: 38,
//     avgCookie: 2.3
// }

// var alKi = {
//     minCust: 2,
//     maxCust: 16,
//     avgCookie: 4.6
// }
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


var ulEl = document.getElementById('firstAndPike');



var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7PM', '8 PM']
var locSales = [];
var totalCookies = 0;



var firstPike = {
    minCust: 23,
    maxCust: 65,
    avgCookie: 6.3,

    getRandomCookie: function(min, max) {
        min = this.minCust;
        max = this.maxCust;
        return Math.round(Math.random() * (max - min + 1) + min);
    },
    figuringCookie: function() {
        for (var i = 0; i < times.length; i++) {

            var salesAvgHour = this.getRandomCookie(this.minCust, this.maxCust);
            var bakeCookies = salesAvgHour * Math.round(this.avgCookie);
            totalCookies += bakeCookies;
            locSales[i] = bakeCookies;

        }
        for (i = 0; i < times.length; i++) {
            // console.log(locSales, totalCookies)
            console.log(`At ${[i]} you will need to bake ${locSales[i]}`)
            var liEl = document.createElement('li');
            liEl.textContent = `At ${times[i]} you will need to bake ${locSales[i]} salmon cookies.`;
            ulEl.appendChild(liEl);
        }
    }
}

firstPike.figuringCookie();