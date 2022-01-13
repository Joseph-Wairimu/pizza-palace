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