import {inject} from 'aurelia-framework';
import {MovieClient} from 'movieclient';

@inject(MovieClient)
export class App {
    
    constructor(movieClient) {
        this.message = null;
        this.movieClient = movieClient;
    }
    
    activate() {
        this.message = "Hello from Aurelia!";
        return this.movieClient.getMovies()
                               .then(movies => this.movies = movies);
    }
    
    changeMessage() {
        this.message = "Goodbye!"
    }
}