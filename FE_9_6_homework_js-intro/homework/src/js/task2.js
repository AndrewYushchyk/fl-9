var a_length = parseInt(prompt("Enter a length of the side A"));
var b_length = parseInt(prompt("Enter a length of the side B"));
var angle = parseInt(prompt("Enter an angle between the side A and the side B"));
function toDegree (angle) {
	return angle * Math.PI / 180;
}
var radians=toDegree (angle)
var c = Math.sqrt(Math.pow(a_length,2)+Math.pow(b_length,2)-2*a_length*b_length*Math.cos(radians))
var square= 0.5*a_length*b_length*Math.sin(radians)
var perymytr = a_length+b_length+c

if (a_length<=0 || b_length<=0 || angle<=0 || angle>=180 ){
	document.writeln("Invalid data");
}

if (c % 1!=0){
	c=c.toFixed(2);
}
if (square % 1!=0){
	square=square.toFixed(2);
}

if (perymytr % 1!=0){
	perymytr=perymytr.toFixed(2);
}


console.log("c length: "+ c+" "+
"Triangle square: "+ square+" "+
"Triangle perimeter: "+ perymytr

);