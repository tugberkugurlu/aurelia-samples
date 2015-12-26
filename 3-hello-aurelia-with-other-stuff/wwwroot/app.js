import _ from 'underscore';

export class App {
    
    constructor() {
    }
    
    activate() {
        var tempUsers = ['user-1', 'user-2', 'user-3'];
        this.message = "Hello from Aurelia!";
        this.users = _.filter(tempUsers, user => {
            return user !== "user-1";
        });
    }
    
    get fullMessage() {
        return `${this.message} (as full message)`;
    }
    
    changeMessage() {
        this.message = "Goodbye!"
    }
    
    removeUser() {
        this.users.pop();
    }
}