//area of cube
let square = {
  side: 4,
  get area() {
    return this.side * this.side;
  },
};
square.side = 3;
//console.log(square.area)

//make joint functon
function stringconcat(seperator, ...strings) {
  let returnval = "";l̥
  string.forEach((string, i) => {
    if (i == strings.length - 1) {
      returnval += string;
    } else {
      returnval += string + seperator;
    }
  });
  return returnval;
}
//console.log(stringconcat("+","this","is","invalid"))

//restructure
let [first, second, third, ...other] = [1, 2, 3, 4, 5, 6, 7, 8];

//console.log(first)
//console.log(second)
//console.log(third)
//console.log(other)

// when we are constructt house and each house contain 6 machise when the houase ger combine then the machise is -1
function matchouse(house) {
  if (house <= 0) {
    return 0;
  } else {
    return house * +6 - house + 1;
  }
}
console.log(matchouse(1));
console.log(matchouse(20));
console.log(matchouse(60));
