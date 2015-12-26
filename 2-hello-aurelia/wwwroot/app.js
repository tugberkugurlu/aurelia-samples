export class App {
    
    constructor() {
        this.message = null;
    }
    
    activate() {
        this.message = "Hello from Aurelia!";
    }
    
    changeMessage() {
        this.message = "Goodbye!"
    }
}