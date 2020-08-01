class UI{

    async renderSentence(sentense){
        console.log(sentense);
        const sentenseDiv = document.getElementById('sentences-div');
        const div = document.createElement('div');
        div.className ='';
        div.innerHTML=`<div class="card m-2">
            <h2>${sentense.message}</h2>
            </div>`;
        sentenseDiv.appendChild(div);
    }
    async renderTable(log){
        var time = new Date(log.dateHost).toLocaleString();
        var fila="<tr><td>"+log.statusCode+"</td><td>"+log.url+"</td><td>"+log.httpVersion+"</td><td>"+
        log.nameHost+"</td><td>"+ time+"</td><td>"+log.timeProcessService+" ms "+"</td><td>"+log.message+"</td></tr>";
        var tr = document.createElement("TR");
        tr.innerHTML=fila;
        document.getElementById("table").appendChild(tr);
    }
}

export default UI;