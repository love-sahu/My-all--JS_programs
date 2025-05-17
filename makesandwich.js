5let bread1=prompt("which bread would you like to have")
let cachup1=prompt("which cachup would you like to have")
let vejies1=prompt("which vejies would you like to have")


function makesandwich(bread,cachup,vejies){
let sandwich = bread+"  bread  "+cachup+" cachup "+vejies+ "  sandwich is ready ";
return sandwich;}


let vejsandwhich=makesandwich(bread1,cachup1,vejies1);
alert(vejsandwhich);
