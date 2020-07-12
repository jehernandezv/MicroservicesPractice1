class Services {

    constructor() {
        this.URL = 'http://localhost:3000/'
    }

    async getSentence() {
        const response = await fetch(this.URL);
        const sentense = await response.json();
        return sentense;
    }
}

export default Services;