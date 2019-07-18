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
stores.push(new Store('First and Pike', 23, 65, 6.3));
stores.push(new Store('SeaTac', 3, 24, 1.2));
stores.push(new Store('Seattle Center', 11, 38, 3.7));
stores.push(new Store('Capitol Hill', 20, 38, 2.3));
stores.push(new Store('Alki', 2, 16, 4.6));

renderHeader();
renderStores();
renderFooter();

function renderStores() {
    for (var i = 0; i < stores.length; i++) {
        stores[i].render(table);
    };
}

function renderHeader() {
    //creating location before the written array values
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);
    table.appendChild(trEl);

    //for loop to show the array values
    for (var i = 0; i < hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = hours[i];
        trEl.appendChild(thEl);
    }
    //creating total after the array values
    thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
}

function renderFooter() {
    var totalFooterCookies = createFooterCookieTotals();
    console.log(totalFooterCookies);
    var trEl = document.createElement('tr');
    var tdEl = document.createElement('td');
    tdEl.textContent = 'Hourly Totals';
    trEl.appendChild(tdEl);
    table.appendChild(trEl);

    for (var i = 0; i < totalFooterCookies.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = totalFooterCookies[i];
        trEl.appendChild(tdEl);
    }
    console.log(totalFooterCookies)
}

function createFooterCookieTotals() {
    var totalCookiesPerHour = [];
    console.log(Store.cookiesEachHour);
    var allStoresTotalCookies = 0;
    for (var i = 0; i < hours.length; i++) {
        var hourCookieTotal = 0;
        for (var j = 0; j < stores.length; j++) {
            hourCookieTotal += stores[j].cookiesEachHour[i]
            console.log(hourCookieTotal);
        }
        totalCookiesPerHour.push(hourCookieTotal)
        allStoresTotalCookies += hourCookieTotal;
    }
    totalCookiesPerHour.push(allStoresTotalCookies);
    return totalCookiesPerHour;
}

//Event Driven Function

//array to hold all instances
var newStores = [];
//access the form
var formEl = document.getElementById('form');

// put a listener on the form - event(submit, callback function)
formEl.addEventListener('submit', function(event) {
    event.preventDefault();
    var newStoreName = event.target.storeName.value;
    var newMinCustomers = parseInt(event.target.minimumCustomersPerHour.value);
    var newMaxCustomers = parseInt(event.target.maximumCustomersPerHour.value);
    var newAverageCookies = parseInt(event.target.averageCookiesPerSale.value);

    table.innerHTML = '';

    stores.push(new Store(newStoreName, newMinCustomers, newMaxCustomers, newAverageCookies));
    console.log('made it here');

    renderHeader();
    renderStores();
    renderFooter();
});
//store the info from the form in variables 
// take the variables and run through the constructor
//Helper Function

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function addElement(childElType, childContent, parentEl) {
    var childEl = document.createElement(childElType);
    childEl.textContent = childContent;
    parentEl.appendChild(childEl);
};