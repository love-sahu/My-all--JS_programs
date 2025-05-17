let Entertheamount = document.querySelector("button");
Entertheamount.addEventListener('click', inputmsg);
function inputmsg(){
    let name = prompt('enter name of student');
    Entertheamount.textContent='Roll number,1:'+name;
}