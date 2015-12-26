import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-http-client';

let baseUrl = "/movies.json"

// Whenever, the MovieClient is requested through aurelia DI,
// it will be only one instance of this throughout the app. There
// are other ways to make this transient.
@inject(HttpClient)
export class MovieClient {
    constructor(httpClient) {
        this.http = httpClient;
    }
    
    getMovies() {
        return this.http.get(baseUrl)
                        .then(response => response.content);
    }
}