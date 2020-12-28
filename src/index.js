import _ from "../node_modules/lodash/index.js";
import printMe from "./print.js";

class Main {
    name = 'hello';

    constructor (name) {
        this.name = name;
        // this.log(this.name);
    }

    log (msg) {
        console.log(msg);
    }
    greet() {
        console.log("Greeting to "+this.name);
    }
}

for(let i=0; i<10; i++) {
    let main = new Main('sorabh'+Math.round(Math.random()*50));
    main.greet();
}

function component() {
    const element = document.createElement('div');
  
    element.innerHTML = "Message ES: ";//+_.join(['Hello', 'webpack'], ' ');
    printMe();
    return element;
}

document.body.appendChild(component());