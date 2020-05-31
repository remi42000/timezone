var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        return "Good evening!!! How are you, Remi? ";
    };
    return Greeting;
}());
var obj = new Greeting();
obj.greet();
// color , 
// hight
// width
// capacity
var Bottle = /** @class */ (function () {
    function Bottle() {
    }
    // a method to set the bottle height to 1.2 cm
    Bottle.prototype.setHight = function () {
        this.hight = 1.2;
    };
    Bottle.prototype.message = function () {
        return "thank you for buying coca cola";
    };
    return Bottle;
}());
var Evian = new Bottle();
Evian.color = "red";
console.log(Evian);
var coca = new Bottle();
coca.color = "green";
coca.setHight();
console.log(coca.message());
// console.log(coca);
var GMessage = document.getElementById("gmessage");
var color = document.getElementById("color");
var bmessage = document.getElementById("bmessage");
GMessage.innerHTML = obj.greet();
color.innerHTML = coca.color;
bmessage.innerHTML = coca.message();
