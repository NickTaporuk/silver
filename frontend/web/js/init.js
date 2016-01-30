var request,
    url = {};
    url.getDataUrl = 'http://silver.dev/json/data.json?r=' + Math.random();
if(window.XMLHttpRequest) {
    request  = new  XMLHttpRequest()
} else {
    request = new ActiveXObject("Microsoft.XMLHTTP")
}

request.open('GET',url.getDataUrl,true);
request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
request.timeout = 1000;
request.send();
request.onreadystatechange = function() {

    console.log('request.readyState:',request.readyState);
    if (request.status === 200 && request.readyState === 4) {
        //alert( request.responseText );
        var output = '';
        //console.log(JSON.parse(request.responseText));
        var info = JSON.parse(request.responseText);

            for(key in info) {
                if(info.hasOwnProperty(key) && typeof info[key] !== 'object') {
                    console.log(key,':=>',info[key]);
                    output+='<li>'+key+':=>'+info[key]+'</li>';
                }
            }
        var update = document.getElementById('links');
        update.innerHTML = output;
    }
};

document.forms.upload.onsubmit = function() {
    var input = this.elements.myfile;
    var file = input.files[0];
    if (file) {
        upload(file);
    }
    return false;
}

function upload(file) {

    var xhr = new XMLHttpRequest();

    // обработчик для закачки
    xhr.upload.onprogress = function(event) {
        console.log(event.loaded + ' / ' + event.total);
    }

    // обработчики успеха и ошибки
    // если status == 200, то это успех, иначе ошибка
    xhr.upload.onprogress = function(event) {
        console.log( 'Загружено на сервер ' + event.loaded + ' байт из ' + event.total );
    }

    xhr.upload.onload = function() {
        alert( 'Данные полностью загружены на сервер!' );
    }

    xhr.upload.onerror = function() {
        alert( 'Произошла ошибка при загрузке данных на сервер!' );
    }

    xhr.open("POST", "upload", true);
    xhr.send(file);

}

request.ontimeout = function() {
    alert( 'Извините, запрос превысил максимальное время' );
};