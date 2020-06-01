// class Greeting { 
//     greet():any { 
//        return "Good evening!!! How are you, Remi? ";
//     } 
//  } 
//  var obj = new Greeting(); 
//  obj.greet();
var Computer = /** @class */ (function () {
    function Computer() {
    }
    // a method that sets the make to apple
    Computer.prototype.setMake = function () {
        this.make = "apple";
    };
    //a method that sets the keyboard
    Computer.prototype.setkeyboard = function () {
        this.keyboard = "US";
    };
    Computer.prototype.isKeyboardUSA = function () {
        if (this.keyboard == "US") {
            return "Really good!";
        }
        else {
            this.keyboard = "GB";
            console.log("The keyboard is GB");
        }
    };
    return Computer;
}());
var apple = new Computer();
apple.setkeyboard();
apple.isKeyboardUSA();
console.log(apple);
// let GMessage = document.getElementById("gmessage");
// let color = document.getElementById("color");
// let bmessage = document.getElementById("bmessage");
// GMessage.innerHTML = obj.greet();
// color.innerHTML = coca.color;
// bmessage.innerHTML = coca.message(); 
