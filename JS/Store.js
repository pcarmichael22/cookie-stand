//CONSTRUCTOR - OBJECT CALLED STORE
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

function Store(storeName, minCustEachHour, maxCustEachHour, avgCookiePerCustomer, table) {
    this.storeName = storeName;
    this.minCustEachHour = minCustEachHour;
    this.maxCustEachHour = maxCustEachHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.totalCookies = 0;
    this.cookiesEachHour = [];
    this.customerEachHour = [];
    this.generateCustEachHour();
    this.generateCookiesBakedEachHour();
    this.table = table;

}

//PROTOTYPE METHODS

Store.prototype.generateCustEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var customerPerHour = randomNumber(this.minCustEachHour, this.maxCustEachHour);
        this.customerEachHour.push(customerPerHour);
    }
}

Store.prototype.generateCookiesBakedEachHour = function() {
    for (var i = 0; i < hours.length; i++) {
        var bakeCookiesPerHour = Math.ceil(this.customerEachHour[i] * this.avgCookiePerCustomer);
        this.cookiesEachHour.push(bakeCookiesPerHour);
        this.totalCookies += bakeCookiesPerHour;
    }
}


Store.prototype.render = function() {
    var trEl = document.createElement('tr');
    this.table.appendChild(trEl);

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
}