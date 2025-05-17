let runagain = true;
const canDrive = (age) => {
    return age >= 18 ? true : false;
  };
while (runagain) {
  let age = prompt("Enter your age ");
  age = Number.parseInt(age)

  if (age<0){
    console.error("enter valid age")
    break;
  }
  if (canDrive(age)) {
    alert("yes you can drive ");
  } else {
    alert("yes u can not drive");
  }
  runagain = confirm("do you want to run again");
}
