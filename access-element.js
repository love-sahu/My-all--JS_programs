


// const message=function(name='kush',name2='sahu',topic='java'){
//     console,console.log(`i am ,${name}!`);
//     console,console.log(`my surname is ,${name2}!`);
//     console,console.log(`& i nkow ,${topic}!`);
    
// }
//  message('love','kaka');



// const add=function(a,b){
//     return a+b
//     // console.log(a+b)
// }
// let result=add(12,181)
// console.log(result);
// // alert(result);


// const add=(a,b)=>a+b
// let result=add(12,10)
// console.log(result);



// let names=['a','b','c','d','e']
// names.forEach(function(name){
// console.log(name)
// });


// let names=['a','b','c','d','e']
// names.forEach((name,index)=>console.log(name,index))

// let names=['a','b','c','d','e']
// let allname=(name)=>console.log(name)
// names.forEach(allname);



// let user={
//     name:`sofia`,
//     age:`18`,
//     color:`gora`,
//     sex:`female`,
// gatedetail:function(){
//     console.log(`name :${user.name},age:${user.age},color:${user.color},sex:${user.sex}`);
// }
// };
// console.log(typeof user)
// console.log(typeof console)

// user.gatedetail()
// console.log(user.sex)   
// console.log(user[`name`])

// let user={
//     name:`sofia`,
//     age:`18`,
//     color:`gora`,
//     sex:`female`,
// gatedetail:function(){
//     console.log(`name :${this.name},age:${this.age},color:${this.color},sex:${this.sex}`);
// }};
// console.log(this)



// let element=document.getElementsByTagName('h2')
// console.log(element)




// let element2=document.getElementsByClassName('usa')
// console.log(element2)


// let element1=document.getElementById('usa1')
// console.log(element1);



// let greeting = document.querySelector('h1')

// greeting.innerText='welcom to my world'

// let change=document.querySelector('divcls')
 



// let text=document.querySelector('.divcls')
// console.log(text.innerHTML)

// let text=document.querySelector('.divcls')
// text.innerHTML='<h1>welcom u babay</h1>'

// let text=document.querySelector('.divcls')
// text.innerHTML+='<h1>welcom u babay</h1>'


// let elements = document.querySelectorAll('h1')

// elements.forEach(allh1=>{
//     console.log(allh1.innerText)
// })

// let elements = document.querySelectorAll('h1')
// let val='<h1>mene kia ise add</h1>'
// elements.forEach(allh1=>{
//     allh1.innerText+=val
// }) 


// let numbers=[1,5,3,2,27,22]
// let even_number=numbers.filter(numbeer=>{
//     return numbeer%2==0
// })
// console.log(even_number)
// let number=[
//     {number:27,type:"odd"},
//     {number:2,type:"even"},
//     {number:22,type:"even"},
//     {number:13,type:"odd"}


// ]
// let odd_number=number.filter(numbeer=>number.type=='odd')
// console.log(odd_number)

// let numbers=[100,2,4,8,6]

// let sqr_number=numbers.map(number=>number*number);
// console.log(sqr_number,numbers);


// let numbers=[
//     {number:2,type:'sqr'},
//     {number:8,type:'cube'},
//     {number:2,type:'cube'},
//     {number:5,type:'sqr'},
//     {number:6,type:'cube'},
//     {number:2,type:'sqr'},
//     {number:4,type:'cube'}
// ]
// let sqrcub_number=numbers.map(number1=>{
//     if(number1.type=='sqr'){
//         return number1.number*number1.number;
//     }
//     else{
//         return number1.number*number1.number*number1.number;
//     }
// })
// console.log(sqrcub_number,numbers.number)



// let number=[1,2,4,5,2,4,5,4,55];

// let new_number= number.reduce((count,current)=>{
//     if(current%5==0){
//         count+=1
//     }
//     return count
// },0);
// console.log(new_number);
// let numbers=[
//     {number:2,type:'sqr'},
//     {number:8,type:'cube'},
//     {number:2,type:'cube'},
//     {number:5,type:'sqr'},
//     {number:6,type:'cube'},
//     {number:2,type:'sqr'},
//     {number:4,type:'cube'},
//     {number:4,type:'cube'}

// ]

// let new_numbers= numbers.reduce((counter2,current2)=>{
//     if(current2.type=='cube'){
//         counter2+=1
//     }
//     return counter2;
// },0);
// console.log(new_numbers)



