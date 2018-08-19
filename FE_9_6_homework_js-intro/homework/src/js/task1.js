var price = prompt("Enter a price ");
var discount = prompt("Enter a discount ");
var new_price= price-(price*(discount/100));
var saved_money=price-new_price;
if (price<=0){
	document.writeln("Invalid data");
}


if (new_price % 1!=0){
	new_price=new_price.toFixed(2);
}

if (saved_money % 1!=0){
	saved_money=saved_money.toFixed(2);
}

console.log("Price without discount: "+price+" "+ 
"Discount: " + discount +" "+ 
"Price with discount: " + new_price +" "+ 
"Saved: " + saved_money
);