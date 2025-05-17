let number = prompt("Enter a number");
number = Number.parseInt(number);
if (number == 1) {
  location.href = "https://google.com";
} else if (number == 2) {
  location.href = "https://youtube.com";
} else if (number == 3) {
  location.href = "https://gmail.com";
} else if (number == 4) {
  location.href = "https://javatpoint.com";
} else {
  alert("enter correct number");
}
