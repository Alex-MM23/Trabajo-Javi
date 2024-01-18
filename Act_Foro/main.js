function login() {
    var username = document.getElementById("alias").value;
    var password = document.getElementById("password").value;

    const URL = `php/servidor.php?peticion=login&alias=${username}&password=${password}` ;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.length == 0){
            window.location.href = 'index.html';
            alert("Contraseña o Usuario incorrecto!")
        }else{
            window.location.href = 'inicio.html';
            // localStorage.setItem('usu_id', data.usu_id)
            // console.log(localStorage.getItem('usu_id'));
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
    });
}

function registro() {
    var nombre = document.getElementById("nombre").value;
    var alias = document.getElementById("alias").value;
    var pasword = document.getElementById("password").value;
    var foto = document.getElementById("foto").value;

    const URL = `php/servidor.php?peticion=registro&nombre=${nombre}&alias=${alias}&pasword=${pasword}&foto=${foto}` ;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
            window.location.href = 'index.html';
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });
}

function ftemas() {
    const URL = 'php/servidor.php?peticion=lista_temas';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<ul class='temas-lista'>";
        data.forEach(item => {
            html += `<li class='tema-item' onclick="CargarMensaje(${item.tema_id})">${item.tema_tema}</li>`;
        });
        html += "</ul>";
        document.querySelector("section").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });

    CargarMensaje();    
}

function CargarMensaje(tema_id) {
    const URL = `php/servidor.php?peticion=lista_mensaje&temas=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<div class='chat-box' id='chatBox'>";
        data.datos.forEach(item => {
            html += "<div class='message'>";
            html += "   <span class='user'>Nombre del Usuario </span>";
            html += "   <span class='timestamp'>" + item.men_fecha_hora + " </span>";
            html += "   <p>" + item.men_mensaje + "</p>";
            html += "</div>";
        });
        html += "<div class='input-box'>";
        html += "<input type='text' id='messageInput' placeholder='Escribe tu mensaje...'>";
        html += `<button onclick='EnviarMensaje(${tema_id})'>Enviar</button>`;
        html += "   </div>";
        html += "</div>";
        document.getElementById("container").innerHTML = html;
    })
}

function EnviarMensaje(tema_id){
    var mensaje = document.getElementById("messageInput").value ;

    const URL = `php/servidor.php?peticion=enviarMensaje&mensaje=${mensaje}&temas=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        alert("Mensaje Enviado");
    })
}