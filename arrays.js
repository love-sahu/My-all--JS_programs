// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let b= num.toString()
// console.log(b,typeof b)
// let c= num.join("")
// console.log(c)
// console.log(c,typeof c)//===>1-2-3-4-5-6-7-8-9

/*
//push
num.push(10);

//unshift
num.unshift(0);

//pop
num.pop(); //remove lastvalue

//shift
num.shift();
console.log(num)
num[0] = "love"; //add value in indax 0*/
/*
const names = ["love", "sahu", "raju", "jaggu"];
///names.indexof('love')
//console.log(names.indexOf('raju',3))//start counting from 3
names.lastIndexOf("raju"); //start counting from last
names.includes("love");
console.log(names.includes("love", 2)); //cheak after 2 love is present or notm*/

/*let channel = [
  {
    name: "java t poiint",
    followers: 800,
  },

  {
    name: "feejs forgeeks",
    followers: 199,
  },
  {
    name: "w3school",
    followers: 222,
  },
];

console.log(
  channel.find(function (element) {
    return element.name === "w3scefrfhool";
  })
);*/

//arrow function
/*console.log(
    channel.find(element=> element.name === "w3school"    
    ));*/

 /*let names1 = ["love","sahu","raju"]
    let names2 = ["love","sahu","raju"]
    let names3 =["10,20,30,,40,50,60,70,80"]

    console.log(names1.concat(names2,names3))//add above 3 arrow*/

    /*//sort
    let names3 =[50,60,70,8010,20,30,,40]
    names3.sort()
    console.log(names3)//sort in alphabetical order*/

/*//ssort in assanding order
    let compare = (a,b)=>{
      return a-b
    }
    let num = [250,250,52,05,78,955,62,6256,615,]
    num.sort(compare)
    console.log(num)*/
//slice method
/* let names1 = ["love","sahunu","raju"]
let names2 = ["love","sahu","raju"]
let names3 = names1.concat(names2)
console.log(names1.concat(names2))
console.log(names3.slice(1,4))//remove   1  to  4*/


//array.form
let names ="lovesahu"
let new_aray =Array.from(names)

console.log(new_aray)


//spread operator
/* let names1 = ["love","sahu","raju"]
    let names2 = ["love1","sahu1","raju1"]
    let names3 = [...names1,...names2]
    console.log(names3)*/

//for loop

/*const names = ["love", "sahu", "raju", "jaggu"];
for(let i =0;i<names.length;i++)
{
    console.log(names[i])
}
//for loop
for( let names of name) {
    console.log(name)
}
 //foe-each loop
 names.forEach(function(names,index){
console.log(names,index);
 })
*/
  
  //join
  /*let student = ['s','h','i','v','a']
student = student.join('=');

  //split
console.log(student.split(" "))*/
//filter method

// counting length of arry
/*let array1=[1,2,3,4,5,6,7,8,9,10];
array1[0]=100;
array1[10]=500;
console.log("thr length of the above array is",array1.length)//====10
console.log(array1)*/