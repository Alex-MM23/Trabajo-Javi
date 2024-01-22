function login() {
    var username = document.getElementById("alias").value;
    var password = document.getElementById("password").value;

    const URL =  `assets/php/servidor.php?peticion=login&alias=${username}&password=${password}` ;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.length == 0){
            window.location.href = 'index.html';
            alert("¡Contraseña o Usuario incorrecto!")
        }else{
            window.location.href = 'pantalla2.html';
            alert("¡Usuario correcto!")
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
    });
}

function registro() {
    window.location.href = 'register.html';
    var nombre = document.getElementById("registro_nombre").value;
    var alias = document.getElementById("registro_alias").value;
    var password = document.getElementById("registro_password").value;
    var foto = document.getElementById("registro_foto").value;

    const URL = `assets/php/servidor.php?peticion=registro&nombre=${nombre}&alias=${alias}&password=${password}&foto=${foto}` ;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        if (data.length == 0){ 
            alert("No se puedo registrar el usuario");
        }else {
            window.location.href = 'index.html';
        }
        
    })
    .catch(() => {
        alert("Usuario registrado");
        window.location.href = 'index.html';
    });
}

function fInicio() {
    fCargarTemas();
}

function fCargarTemas() {
    let html = "<ul>";
    let URL = "assets/php/servidor.php?peticion=fCargarTemas";
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);

            let html = "";
            data.forEach(item => {
                html += `<li  onclick="fCargarMensajes(${item.tema_id})" <span><img class="papelera" src="assets/img/basura.png" alt="" onclick="borrarTema(${item.tema_id})"></span> `;
                html += item.tema_tema;
                html += '</li>';   
            });
            html += "</ul>"
            document.querySelector("nav").innerHTML = html;
        });
}

function fCargarMensajes(tema_id) {
    let URL = `assets/php/servidor.php?peticion=fCargarMensajes&temas=${tema_id}`;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            let html = "";
            html += "";
            html += "";
            data.datos.forEach(item => {
                html += `<ul>`; 
                html += `<div class="mensajes">  `  + item.men_mensaje + `<span class="fecha">` + item.men_fecha_hora + `</span> <span><img class="papelera" src="assets/img/basura.png" alt="" onclick="borrarMensaje(${item.men_id})"></span> </div>` ;
                html += `</ul>`;
            });
            html += "<input type='text' id='mensajeInput' placeholder='Escribe tu mensaje...'>";
            html += `<button id='boton' onclick='EnviarMensaje(${tema_id})'>Enviar</button>`;
            html += "";
            document.querySelector("section").innerHTML = html;
        })
}

function cerrar(){
    document.getElementById('cerrar').addEventListener('click', function(){
        alert("¡Se ha cerrado sesión correctamente!");
        window.location.href = 'index.html';
    })
}

function AgregarTema(){
    var tema = document.getElementById("temaInput").value ;

    const URL = `assets/php/servidor.php?peticion=AgregarTema&tema=${tema}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Tema no se ha podido crear");
        }else {
            alert("Tema Creado");
            window.location.href = 'pantalla2.html';
        }
    })
    .catch(() => {
        alert("¡Tema creado con éxito!");
        window.location.href = 'pantalla2.html';
    });
}


function EnviarMensaje(tema_id){
    var mensaje = document.getElementById("mensajeInput").value ;

    const URL = `assets/php/servidor.php?peticion=enviarMensaje&mensaje=${mensaje}&tema_id=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        
    })
    .catch(() => {
        alert("¡Mensaje creado con éxito!");
        window.location.href = 'pantalla2.html';
    });
}

function volver(){
    document.getElementById('volver').addEventListener('click', function(){
        window.location.href = 'pantalla2.html';
    })
}

function borrarTema(tema_id){

    const URL = `assets/php/servidor.php?peticion=borrarTema&tema_id=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        
    })
    .catch(() => {
        alert("¡Tema borrado con gran éxito!");
        window.location.href = 'pantalla2.html';
    });
}

function borrarMensaje(men_id){

    const URL = `assets/php/servidor.php?peticion=borrarMensaje&men_id=${men_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
       
    })
    .catch(() => {
        alert("¡Mensaje borrado con gran éxito!");
        window.location.href = 'pantalla2.html';
    });
}

