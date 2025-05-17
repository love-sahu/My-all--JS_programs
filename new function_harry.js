function operation(x, y) {
    console.log("operation completed")
  return 1 + (x - y);
}

let a = 1;
let b = 2;
let c = 3;
console.log("ans of operation ", operation(a, b));
console.log("ans of operation ", operation(a, c));
console.log("ans of operation ", operation(c, b));
