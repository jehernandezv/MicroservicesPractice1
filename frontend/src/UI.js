class UI {
    async renderSentence(sentense) {
        console.log(sentense);
        const sentenseDiv = document.getElementById('sentences-div');
        const div = document.createElement('div');
        div.className = '';
        div.innerHTML = `<div class="card m-2 bg-dark ">
            <h2 class="text-light text-center">${sentense.message}</h2>
            </div>`;
        sentenseDiv.appendChild(div);
    }
    /*   async renderTable(log){
           var time = new Date(log.dateHost).toLocaleString();
           var fila="<tr><td>"+log.statusCode+"</td><td>"+log.url+"</td><td>"+log.httpVersion+"</td><td>"+
           log.nameHost+"</td><td>"+ time+"</td><td>"+log.timeProcessService+" ms "+"</td><td>"+log.message+"</td></tr>";
           var tr = document.createElement("tr");
           tr.innerHTML=fila;
           document.getElementById("table").appendChild(tr);
       }*/
    async renderTable(log) {
        var time = new Date(log.dateHost).toLocaleString();
        var datos = [
            {
                statusCode: log.statusCode,
                url: log.url,
                httpVersion: log.httpVersion,
                nameHost: log.nameHost,
                time: time,
                timeProcessService: log.timeProcessService,
                message: log.message
            }
        ];
        $('.exceptionTable').DataTable({
            data: datos,
            columns: [
                { title: "Status code", data: "statusCode" },
                { title: "URL", data: "url" },
                { title: "HTTP Version", data: "httpVersion" },
                { title: "Host name", data: "nameHost" },
                { title: "Host date", data: "time" },
                { title: "Service process time", data: "timeProcessService" },
                { title: "Message", data: "message" }
            ]
        });
        
    }
}

export default UI;