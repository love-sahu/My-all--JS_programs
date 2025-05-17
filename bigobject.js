//let lacture = 10;
//let section = 3;
//let title = "python coursee";

/*const course = {
  lacture: 10,
  section: 3,
  title: "python coursee",
  notes: {
    introduction: "welcome to js course",
  },

  enroll() {
    console.log("you are successsfully enrloll");

  }
}

course.enroll()
console.log(course)
 course.prise=500
console.log(course.lacture)
*/
//factory function

/*function createCourse(title) {
  return {
    lacture: 10,
    section: 3,
    title: title,
    notes: {
      introduction: "welcome to js course",
    },
    enroll() {
      console.log("you are successsfully enrloll");
    },
  };
}

const course = createCourse("javascript");
course.enroll();
console.log(course);*/

// constructor function



/*function Course(title) {
  this.title = title,
    this.enroll = function () {
      console.log("you are success fullly inroll");
    };
}
const course = new Course("java script");
course.enroll();

console.log(course);*/


const Course_1 = new Function('title',  `
this.title = title,
  this.enroll = function () {
    console.log("you are success fullly enroll");
  };`)

 const course_2 = new Function('javascript');
 course_2.enroll();


       //primitivec data t]ype

      /* let number1 = 10;// pass by value 

       let number2 = number1//pass by reference
       number1=20
       console.log(number1)
       console.log(number2)
         
        //referance data type

        let obj1 = {number:10}// pass by value 
        let obj2= obj1;       //pass by reference

        obj1.number=500;
        console.log(obj1)
        console.log(obj2)*/

    /*const course = {
        title:'javascript',
        enroll(){
            console.log('you are success fully inrollrd')
        }
    }
     for (let key in course){
        console.log (key,course[key])
     }
     const course_1={};
     for(let key of Object.keys(course)){
       // console.log(key,console[key])
       course_1[key]=course[Key]
     }
     alert(course_1)*/
     