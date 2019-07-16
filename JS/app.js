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




function figuringCookie(index) {
    var totalCookies = 0;
    for (var i = 0; i <= times.length; i++) {

        var ulEl = document.getElementById(index.elemID);
        var salesAvgHour = index.getRandomCookie();
        var bakeCookies = salesAvgHour * Math.floor(index.avgCookie);
        totalCookies += bakeCookies;
        locSales[i] = bakeCookies;
        var liEl = document.createElement('li');
        liEl.textContent = `${times[i]} : ${locSales[i]} salmon cookies.`;
        ulEl.appendChild(liEl);
    }
    liEl.textContent = `Total: ${totalCookies} cookies.`;
    ulEl.appendChild(liEl);
}

var times = ['6 AM', '7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7PM', '8 PM']
var locSales = [];

var firstPike = {
        minCust: 23,
        maxCust: 65,
        avgCookie: 6.3,
        elemID: 'firstAndPike',

        getRandomCookie: function(min, max) {
            min = this.minCust;
            max = this.maxCust;
            return Math.floor(Math.random() * (max - min + 1) + min);
        },
        renderCookie: function() {
            figuringCookie(this);
        }
    }
    // SEATAC

var seaTac = {
    minCust: 3,
    maxCust: 24,
    avgCookie: 1.2,
    elemID: 'seaTac',

    getRandomCookie: function(min, max) {
        min = this.minCust;
        max = this.maxCust;
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    renderCookie: function() {
        figuringCookie(this);
    }
}

// SEATTLE CENTER

var seaCent = {
    minCust: 11,
    maxCust: 38,
    avgCookie: 3.7,
    elemID: 'seaCent',

    getRandomCookie: function(min, max) {
        min = this.minCust;
        max = this.maxCust;
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    renderCookie: function() {
        figuringCookie(this);
    }
}

// CAPITOL HILL

var capHill = {
    minCust: 20,
    maxCust: 38,
    avgCookie: 2.3,
    elemID: 'capHil',

    getRandomCookie: function(min, max) {
        min = this.minCust;
        max = this.maxCust;
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    renderCookie: function() {
        figuringCookie(this);
    }
}

// ALKI BEACH

var alkBea = {
    minCust: 2,
    maxCust: 16,
    avgCookie: 4.6,
    elemID: 'alkBea',

    getRandomCookie: function(min, max) {
        min = this.minCust;
        max = this.maxCust;
        return Math.floor(Math.random() * (max - min + 1) + min);
    },
    renderCookie: function() {
        figuringCookie(this);
    }
}

var shopNames = [firstPike, seaTac, seaCent, capHill, alkBea];
for (var i = 0; i < shopNames.length; i++) {
    shopNames[i].renderCookie();
}