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
  calcCustPerhour: function () {
    for (let i = 0; i < hours.length; i++) {
      const randNum = randomNumber(this.mincust, this.maxCust);
      this.customersPerHour.push(random);
      this.cookiesPerHour.push(randnum * this.avgCookiesPerCust);
    }
  },
};

// const test = random(seattle.mincust, seattle.maxcust);
// console.log(test);

interests
const ul = document.createElement("ul");
for (let i = 0; i < seattle.avgCookiesPerCust.length; i++) {
  const li = document.createElement("li");
  li.textContent = seattle.avgCookiesPerCust[i];
  ul.appendChild(li);
// }
// article.appendChild(ul);
