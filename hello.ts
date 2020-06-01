// class Greeting { 
//     greet():any { 
//        return "Good evening!!! How are you, Remi? ";
//     } 
//  } 
//  var obj = new Greeting(); 
//  obj.greet();

class Computer {
    mousse:string;
    keyboard:string;
    make:string;
    
    // a method that sets the make to apple
    setMake():any {
        this.make="apple";
                
    }
     //a method that sets the keyboard
     setkeyboard():any {
        this.keyboard="US";
     }
    
     isKeyboardUSA():any {
         if(this.keyboard == "US") {
             return "Really good!";
         } else {
             this.keyboard = "GB";
            console.log("The keyboard is GB");
         }
     }
}

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