/*const cartoon = [
  {
    names: "dorimon",
    height: "20",
    mass: "500",
    ayes_color: "blue",
    gender: "mail",
  },
  {
    names: "nobita",
    height: "25",
    mass: "405",
    ayes_color: "black-shine",
    gender: "mail",
  },
  {
    names: "sizuka",
    height: "25",
    mass: "50",
    ayes_color: "light-blue",
    gender: "femail",
  },
  {
    names: "sunio",
    height: "22",
    mass: "40",
    ayes_color: "read",
    gender: "mail",
  },
];
//get an name of all array
const names = cartoon.map((ch) => ch.names);
//console.log(names)

//get an array of object with name and height properties
const name_height = cartoon.map((ch) => {
  return {
    names: ch.names,
    height: ch.height,
  };
});
//console.log(name_height);

//get the total height of all characte
const height = cartoon.map((ch) => {
  return { height: ch.height };
});
//console.log(height);

const totalheight = cartoon.reduce((priviousheight, cartoon) => {
  return priviousheight + Number(cartoon.height);
}, 0);
//console.log(totalheight)

//get character which mass greater then 100
const less_mas = cartoon.filter((ch) => {
  return cartoon.mass > 100;
});
//console.log(less_mas);

//get all mail character

const mail_cartoon = cartoon.filter((character) => {
  return character.gender == "mail";
});
//console.log(mail_cartoon);


  //sort by name
  const sort1 = cartoon.sort((cartoon1,cartoon2)=>
  {
    if(cartoon1.names < cartoon2.names){
        return-1;
    }
    if(cartoon1.names   >   cartoon2.names){
        return 1;
    }
    return 0;
  })
  //console.log(sort1)
  //sort by gender
  const sort = cartoon.sort((cartoon1,cartoon2)=>
{
  if(cartoon1.gender > cartoon2.gender ){
      return-1;
  }
  if(cartoon1.gender    <   cartoon2.gender ){
      return 1;
  }
  return 0;
})
//console.log(sort)
  //does every cartoon haave  mass more then 40?
 // console.log(cartoon.every((cartoon)=>cartoon.mass > 40))
  //does every cartoon haave  mass more then 40?
//console.log(cartoon.every((cartoon)=>cartoon.mass > 40))
//does every cartoon haave  blue eyes?
//console.log(cartoon.every((cartoon)=>cartoon.ayes_colo =="blue"))
//is there at list one male charavter 
//console.log(cartoon.some((cartoon)=>cartoon.gender))
//is ther at least one character taller then 2007 
console.log(cartoon.some((cartoon)=>cartoon.height>20))*/

//create an array and enter the number by user

// let array =[10,20,30,40,50,60,70,80,90]

// let a = prompt("Enter an number")
// a = Number.parseInt(a)
// array.push(a)
// alert(array)

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90];
do {
  a = prompt("Enter an number");
  a = Number.parseInt(a);
  array.push(a);
} while (a != 0);

console.log(array);
