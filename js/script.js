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