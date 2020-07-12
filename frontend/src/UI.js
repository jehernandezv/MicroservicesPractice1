import Services from './Services';
const services = new Services();

class UI{

    async renderSentence(){
        const sentense = await services.getSentence();
        console.log(sentense);
        const sentenseDiv = document.getElementById('sentences-div');
        const div = document.createElement('div');
        div.className ='';
        div.innerHTML=`<div class="card m-2">
            <h2>${sentense.message}</h2>
            </div>`;
        sentenseDiv.appendChild(div);
    }   
}

export default UI;