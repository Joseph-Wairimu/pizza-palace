function PizzaOrder(size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
    this.quantity = number;
    this.price = 0;
};
pizzaSelectChange = function () {
    this.flavor = $("#flavor option:selected").val();
    document.getElementById("pflavor").innerHTML = this.flavor;
}
proportionSelectChange = function () {
    this.size = $("#size option:selected").val();
    document.getElementById("psize").innerHTML = this.size;
    
    
}
crustySelectChange = function () {
    this.crust = $("#crust option:selected").val();
    document.getElementById("pcrust").innerHTML = this.crust;
}
toppySelectChange = function () {
    this.topping = $("#topping option:selected").val();
    document.getElementById("ptoppings").innerHTML = this.topping;
   
}

quantitySelectChange = function () {
    this.quantity = $("#number").val();
    document.getElementById("pnumber").innerHTML = this.quantity;
    
}
totalSelectChange = function () {
    this.price = $("#ptotal-cost").val();
    document.getElementById("ptotal-cost").innerHTML = this.price;
    
}
$("#order").on("submit", function (e) {
    e.preventDefault();
    let customToppings = $("#topping option:selected").val();
    let customFlavor = $("#flavor option:selected").val();
    let quantity = $("#number").val();
    let customSize = $("#size option:selected").val();
    let customCrust = $("#crust option:selected").val();



});