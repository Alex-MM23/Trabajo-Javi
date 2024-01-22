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
            if (data[0].usu_admin === '1') {
                // Si usu_admin es 1, redirige a la página de administrador
                window.location.href = 'inicio_admin.html';
            } else {
                // Si usu_admin es 0, redirige a la página de usuario normal
                window.location.href = 'inicio.html';
            }
            var usu_id = data[0].usu_id;
            console.log("Usu_id: " + usu_id);
            localStorage.setItem('usu_id', usu_id);
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
        var usu_id = data[0].usu_id;
            console.log("Usu_id: " + usu_id);
            localStorage.setItem('usu_id', usu_id);
    });
}

function registro() {
    var nombre = document.getElementById("registro_nombre").value;
    var alias = document.getElementById("registro_alias").value;
    var password = document.getElementById("registro_password").value;
    var foto = document.getElementById("registro_foto").value;

    const URL = `php/servidor.php?peticion=registro&nombre=${nombre}&alias=${alias}&pasword=${password}&foto=${foto}` ;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        if (data.length == 0){
            alert("No se puedo registrar el usuario");
        }else {
            alert("Mensaje Enviado");
            window.location.href = 'index.html';
        }
    })
    .catch(() => {
        window.location.href = 'index.html';
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
            html += "   <span class='user'>" + item.usu_nombre + " </span>";
            html += "   <span class='timestamp'>" + item.men_fecha_hora + " </span>";
            html += "   <p>" + item.men_mensaje + "</p>";
            html += "   <button onclick='borrarMensaje(" + item.men_id + ")'>Eliminar</button>";
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
    var usu_id = localStorage.getItem('usu_id');
    var mensaje = document.getElementById("messageInput").value ;

    const URL = `php/servidor.php?peticion=enviarMensaje&mensaje=${mensaje}&usu_id=${usu_id}&tema_id=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Mensaje no se a podido enviar");
        }else {
            alert("Mensaje Enviado");
            window.location.reload();
        }
    })
    .catch(() => {
        window.location.reload();
    });
}

// JS para apartado usuario Admin

function ftemasAdmin() {
    const URL = 'php/servidor.php?peticion=lista_temas_admin';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<ul class='temas-lista'>";
        data.forEach(item => {
            html += `<div>`;
            html += `<li class='tema-item' onclick="CargarMensaje(${item.tema_id})">${item.tema_tema}</li>`;
            html += `<span class='pointer' onclick="borrarTema(${item.tema_id})"><img src="assets/img/minus-solid.svg" alt="Logo" class="svg-icon"></span>`;
            html += `</div>`;
        });
        html += "</ul>";
        document.querySelector("section").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });

    CargarMensajeAdmin();  
}

function CargarMensajeAdmin(tema_id) {
    const URL = `php/servidor.php?peticion=lista_mensaje_admin&temas=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => { 
        console.log(data);
        let html = "<div class='chat-box' id='chatBox'>";
        data.datos.forEach(item => {
            html += "<div class='message'>";
            html += "   <span class='user'>" + item.usu_nombre + " </span>";
            html += "   <span class='timestamp'>" + item.men_fecha_hora + " </span>";
            html += "   <p>" + item.men_mensaje + "</p>";
            html += "   <button onclick='borrarMensaje(" + item.men_id + ")'>Eliminar</button>";
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

function agregarTema(){
    var tema = document.getElementById("inputTema").value ;

    const URL = `php/servidor.php?peticion=crearTema&tema=${tema}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Tema no se a podido crear");
        }else {
            alert("Tema Creado");
            window.location.href = 'inicio_admin.html';
        }
    })
    .catch(() => {
        window.location.href = 'inicio_admin.html';
    });
}

function borrarTema(tema_id){

    const URL = `php/servidor.php?peticion=borrarTema&tema_id=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Tema no se a podido borrar");
        }else {
            alert("Tema Borrado");
            window.location.href = 'inicio_admin.html';
        }
    })
    .catch(() => {
        window.location.href = 'inicio_admin.html';
    });
}

function borrarMensaje(men_id){

    const URL = `php/servidor.php?peticion=borrarMensaje&men_id=${men_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Mensaje no se a podido borrar");
        }else {
            alert("Mensaje Borrado");
            window.location.href = 'inicio_admin.html';
        }
    })
    .catch(() => {
        window.location.href = 'inicio_admin.html';
    });
}