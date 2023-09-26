class MyDate {
    day;
    month;
    year;
    getDay = function () {
        return this.day;
    }
    getMonth = function () {
        return this.month;
    }
    getYear = function () {
        return this.year;
    }
    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }
    tostring = function () {
        return this.day + '/' + this.month + '/' + this.year;
    }
}
let date = new MyDate(19,4, 1997);
date.day = 10;
date.month = 10;
date.year = 2019;
let day = date.getDay();
let month = date.getMonth();
let year = date.getYear();
alert(date.tostring());