import {HttpClient} from 'aurelia-http-client';

export class App {
    
    constructor() {
        this.message = null;
        this.http = new HttpClient();
    }
    
    activate() {
        this.message = "Hello from Aurelia!";
        return this.http.get('/movies.json')
                        .then(response => {
                            this.movies = response.content;
                        })
    }
    
    changeMessage() {
        this.message = "Goodbye!"
    }
}