//Seatle;
// min hours customer spent

// Max hours customer spent

// how many cookies

const hours = [
  "6am",
  "7am",
  "8am",
  "9am",
  "10am",
  "11am",
  "12pm",
  "1pm",
  "2pm",
  "3pm",
  "4pm",
  "5pm",
  "6pm",
  "7pm",
];
// give a random number between two numbers
function randomNumber(min, max) {
  console.log(min, max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// create our first shop
const seattle = {
  location: "seattle",
  mincust: 23,
  maxcust: 65,
  avgCookiesPerCust: 6.3,
  customersPerHour: [],
  cookiesPerHour: [],
  totalCookieSold: 0,
  calSales: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.mincust, this.maxcust);
      this.customersPerHour.push(randNum);
      this.cookiesPerHour.push(Math.floor(randNum * this.avgCookiesPerCust));
    }
  },
};

function city(
  mincust,
  maxcust,
  avgCookiesPerCust,
  customersPerHour,
  cookiesPerHour,
  totalCookieSold
) {
  this.mincust = mincust;
  this.maxcust = maxcust;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.customersPerHour = customersPerHour;
  this.cookiesPerHour = cookiesPerHour;
  this.totalCookieSold = totalCookieSold;
}

seattle.calSales();
console.log(seattle);

// element on the page with the id saleData
const salesData = document.getElementById("saleData");

// add title and location

const seattleH2 = document.createElement("H2");
seattleH2.textcontent = seattle.location;
salesData.appendChild(seattleH2);

// create a lost to show the cookies sold
const seattleUl = document.createElement("ul");
// loop through out data and for each item create an <li>
for (let i = 0; i < hours.length; i++) {
  const li = document.createElement("li");
  li.textContent = `${hours[i]}: ${seattle.cookiesPerHour[i]} cookies`;
  seattleUl.appendChild(li);
}

salesData.appendChild(seattleUl);

// const test = random(seattle.mincust, seattle.maxcust);
// console.log(test);

// interests;
// const ul = document.createElement("ul");
// for (let i = 0; i < seattle.avgCookiesPerCust.length; i++) {
//   const li = document.createElement("li");
//   li.textContent = seattle.avgCookiesPerCust[i];
//   ul.appendChild(li);
// }
// article.appendChild(ul);
