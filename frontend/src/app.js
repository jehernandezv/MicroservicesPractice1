import './styles.css';
import UI from './UI';
const ui = new UI();
import Services from './Services';
const services = new Services();

document.addEventListener('DOMContentLoaded',async () => {
   await ui.renderSentence(await services.getSentence());
});

document.getElementById('btn-sentence').addEventListener('click',async () => {
    document.getElementById('sentences-div').innerHTML = '';
    ui.renderSentence(await services.getSentence());
});

