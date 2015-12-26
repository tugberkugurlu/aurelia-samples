export class App {
    
    configureRouter(config, router) {
        this.router = router;
        
        config.map([
            { route: ['', 'list'], moduleId: 'movies/list', title: 'List', nav: true },
            { route: 'privacy-policy', moduleId: 'privacy/policy', title: 'Privacy Policy', nav: true } 
        ]);
    }
}