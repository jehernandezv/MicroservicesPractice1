class Services {

    constructor() {
        this.URL = 'http://localhost:3000/'
    }

    async getSentence(min,max) {
        const response = await fetch(this.URL+min+'/'+max);
        const sentense = await response.json();
        return sentense;
    }
}

export default Services;