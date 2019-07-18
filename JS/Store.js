//CONSTRUCTOR - OBJECT CALLED STORE
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var cookieTotalsPerHour = [];

function Store(storeName, minCustomersEachHour, maxCustomersEachHour, avgCookiePerCustomer) {
    this.storeName = storeName;
    this.minCustomersEachHour = minCustomersEachHour;
    this.maxCustomersEachHour = maxCustomersEachHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.totalCookies = 0;
    this.cookiesEachHour = [];
    this.customersEachHour = [];
    this.generateCustomersEachHour();
    this.generateCookiesBakedEachHour();
}

//PROTOTYPE METHODS

Store.prototype.generateCustomersEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var customerPerHour = randomNumber(this.minCustomersEachHour, this.maxCustomersEachHour);
        this.customersEachHour.push(customerPerHour);
    }
}

Store.prototype.generateCookiesBakedEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var bakeCookiesPerHour = Math.ceil(this.customersEachHour[i] * this.avgCookiePerCustomer);
        this.cookiesEachHour.push(bakeCookiesPerHour);
        this.totalCookies += bakeCookiesPerHour;
        cookieTotalsPerHour.push(this.totalCookies[i]);
    }
}

Store.prototype.render = function(table) {
    var trEl = document.createElement('tr');
    table.appendChild(trEl);

    var tdEl = document.createElement('td');
    tdEl.textContent = this.storeName;
    trEl.appendChild(tdEl);

    for (var i = 0; i < hours.length; i++) {
        tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookies;
    trEl.appendChild(tdEl);

    console.log(this.totalCookies);
}