alert("enter the value of a ")
let a= prompt("enteer here","587")
a = Number.parseInt(a)
alert("you entered a of type " + (typeof a))
let write = confirm("do you want to write in thee page")
if(write){
    document.write(a)

}
else{
    document.write("please aallow me to write")
    
}