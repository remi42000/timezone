class Greeting { 
    greet():any { 
       return "Good evening!!! How are you, Remi? ";
    } 
 } 
 var obj = new Greeting(); 
 obj.greet();

// color , 
    // hight
    // width
    // capacity

class Bottle {
    // properties
    color: string;
    hight: number;
    width: number;
    capacity: number;

    // a method to set the bottle height to 1.2 cm
    setHight():any {
       this.hight  = 1.2;
    }
    message() :any {
        return "thank you for buying coca cola";
    }
}

let Evian = new Bottle();
Evian.color = "red";
console.log(Evian);
let coca = new Bottle();
coca.color = "green";
coca.setHight();
console.log(coca.message());
// console.log(coca);

let GMessage = document.getElementById("gmessage");
let color = document.getElementById("color");
let bmessage = document.getElementById("bmessage");
GMessage.innerHTML = obj.greet();
color.innerHTML = coca.color;
bmessage.innerHTML = coca.message(); 