/** Can be added in future */

// Temporal.Now.instant() - get the current system exact time
// Temporal.Now.timeZoneId() - get the current system time zone
// Temporal.Now.zonedDateTimeISO() - get the current date and wall-clock time in the system time zone and ISO-8601 calendar
// Temporal.Now.plainDateISO() - get the current date in the system time zone and ISO-8601 calendar
// Temporal.Now.plainTimeISO() - get the current wall-clock time in the system time zone and ISO-8601 calendar
// Temporal.Now.plainDateTimeISO() - same as above, but return the DateTime in the ISO-8601 calendar

// let myDate = new Date();
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.getUTCDate());
// console.log(typeof myDate);

// let createMyDate = new Date(2023, 11, 23);
// let createMyDate = new Date(2023, 11, 23, 5, 3, 2);
let createMyDate = new Date("01-11-2023");
//console.log(createMyDate.toDateString());
//console.log(createMyDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp);
// console.log(createMyDate.getTime());
console.log(Math.floor(Date.now() / 1000));

