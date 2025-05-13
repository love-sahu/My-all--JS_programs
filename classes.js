class product {
  constructor(itemName) {
    console.log("enter chair name" + itemName);
    this.itemName = itemName;
  }
  getitemName() {
    return this.itemName + "is a product";
  }
}
class furnicher extends product {
  constructor(itemName) {
    super(itemName);
  }
  getitemName() {
    return this.itemName + "is a furnicher";
  }
}

//let pensil=new product('pensil',10,2,'ffg20')
let chair = new furnicher("cahir");

/*  const product1=class {
            constructor (itemName,price,discount,productCode){
                this.itemName=itemName;
                this.price=price;
                this.discount=discount;
                this.productCode=productCode;
            }
           get  getDiscountvalue(){
            return this.discount;
           }
           set setDiscountValue(value){
             this.discount=value;
           }
             
           };
    
           let  chair =new  furnicher('cahir',100,2,'ffg20')
    */
