/*let counter=createcounter();
let counter1=createcounter();
function createcounter(){
    return{
        count:0,
        increment: function(){
            this.count++;
            console.log(this);
        }
    }}

counter.increment();
counter1.increment();


 var count = 0;
 function incrementCounter(){
    this.counter++;
    console.log(this)
 }
 incrementCounter();
 incrementCounter();
 incrementCounter();
 incrementCounter();
 console.log(count);*/
//console.log(this);

function car(name) {
  this.name = name;
  this.start = function () {
    console.log(this.name + "  started");
    console.log(this)
  };
}
let Swift = new car("swift");
//Swift.start()
console.log(name)
