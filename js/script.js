function PizzaOrder(size, crust, toppings) {
    this.flavor = flavor;
    this.size = size;
    this.crust = crust;
    this.topping = toppings;
    this.quantity = number;
    this.price = 0;
    
};


pizzaSelectChange= function() {
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
    // let customFlavor = $("#flavor option:selected").val();
    let quantity = $("#number").val();
    let customSize = $("#size option:selected").val();
    let customCrust = $("#crust option:selected").val();

    if (customToppings == "pinapple") {
        customToppings = 200
    }
    else if (customToppings == "pepper") {
        customToppings = 100
    }
    else if (customToppings == "mushroom") {
        customToppings = 250
    }
    else if (customToppings == "bacon") {
        customToppings = 300
    }
   
   if (customSize == "Large") {
        sizePrice = 1200;
    }
    else if (customSize == "Medium") {
        sizePrice = 800;
    }
    else if (customSize == "Small") {
        sizePrice = 600;
    } else {
        sizePrice = 0;
    }
    if (customCrust == "Thin") {
        crustPrice = 100;
    }
    else if (customCrust == "Thick") {
        crustPrice = 200;
    }
    else if (customCrust == "DoubleStack") {
        crustPrice = 200;
    }
    else {
        crustPrice = 0;
    }
    totalCost = sizePrice + crustPrice + (customToppings);
    totalCost = totalCost * quantity;
    $("#ptotal-cost").html(totalCost);


});


$(document).ready(function(){
    $("#no").click(function(){
      $("#location").hide();
    });
    $("#yes").click(function(){
      $("#location").show();
    });
  });

$("#check-info").on("click", function (e) {
    e.preventDefault();
    let person = $("input#name").val();
    let phone = $("input#phone").val();
    let location = $("input#location").val();
    let deliveryAmount = totalCost + 200;
   
    let delivery="";

if(yes.checked){
delivery="yes"

}else if (no.checked){

    delivery="no"
}
if(delivery=="yes"){


    if ($("input#name").val() && $("input#phone").val() && $("input#location").val() != "") {

        $("#message").append("order for " + person +" " + "Phone number " + " " + phone + ", Your order will be delivered to you at  " + location + "  cost will be .sh:  " + deliveryAmount + ". It is inclusive the delivery fee and your order bill");
        $("#message").slideDown(1200);
        return 0;
    }
    else {
        alert("Invalid provide your delivery information!");
    }




} else if( delivery=="no"){

    $("#message").append("Thank you " + person +" " + " Phone number" + " " + phone + " for Shopping with us, your total cost is " + totalCost +" " + "  and your order is ready for pick up");
    $("#message").slideDown(1200);

}

});