//CONSTRUCTOR - OBJECT CALLED STORE

function Store(storeName, minCustEachHour, maxCustEachHour, avgCookiePerCustomer, table) {
    this.storeName = storeName;
    this.minCustEachHour = minCustEachHour;
    this.maxCustEachHour = maxCustEachHour;
    this.avgCookiePerCustomer = avgCookiePerCustomer;
    this.totalCookies = 0;
    this.cookiesEachHour = [];
    this.customerEachHour = [];
    this.hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
    this.generateCustEachHour();
    this.generateCookiesBakedEachHour();
    this.table = table
}

//PROTOTYPE METHODS

Store.prototype.generateCustEachHour = function() {
    for (var i = 0; i < this.hours.length; i++) {
        var customerPerHour = randomNumber(this.minCustEachHour, this.maxCustEachHour);
        this.customerEachHour.push(customerPerHour);
    }
}

Store.prototype.generateCookiesBakedEachHour = function() {
    for (var i = 0; i < this.hours.length; i++) {
        var bakeCookiesPerHour = Math.ceil(this.customerEachHour[i] * this.avgCookiePerCustomer);
        this.cookiesEachHour.push(bakeCookiesPerHour);
        this.totalCookies += bakeCookiesPerHour;
    }
}

Store.prototype.makeHeader = function() {
    //creating location before the written array values
    var trEl = document.createElement('tr');
    var thEl = document.createElement('th');
    thEl.textContent = 'Location';
    trEl.appendChild(thEl);
    this.table.appendChild(trEl);

    //for loop to show the array values
    for (var i = 0; i < this.hours.length; i++) {
        var thEl = document.createElement('th');
        thEl.textContent = this.hours[i];
        trEl.appendChild(thEl);
    }
    //creating total after the array values
    thEl = document.createElement('th');
    thEl.textContent = 'Total';
    trEl.appendChild(thEl);
}

Store.prototype.render = function() {
    var trEl = document.createElement('tr');
    this.table.appendChild(trEl);

    var thEl = document.createElement('th');
    thEl.textContent = this.storeName;
    trEl.appendChild(thEl);

    for (var i = 0; i < this.hours.length; i++) {
        var tdEl = document.createElement('td');
        tdEl.textContent = this.cookiesEachHour[i];
        trEl.appendChild(tdEl);
    }
    var tdEl = document.createElement('td');
    tdEl.textContent = this.totalCookies;
    trEl.appendChild(tdEl);
}