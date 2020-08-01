import './styles.css';
import UI from './UI';
const ui = new UI();
import Services from './Services';
const services = new Services();

document.getElementById('btn-sentence').addEventListener('click',async (event) => {
    event.preventDefault();
    const min = await document.getElementById('min').value;
    const max = await document.getElementById('max').value;
    const sentence = await services.getSentence(min,max);
    if(sentence.statusCode == 200){
    document.getElementById('sentences-div').innerHTML = '';
    await ui.renderSentence(sentence);
    }else{
        await ui.renderTable(sentence);
    }
    
});

