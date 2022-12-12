import Loader from './loader';

class AppLoader extends Loader {
    constructor() {
        super('https://newsapi.org/v2/', {
            apiKey: '50f669f89101421db92cab2a262d3b0f', // получите свой ключ https://newsapi.org/
        });
    }
}

export default AppLoader;
