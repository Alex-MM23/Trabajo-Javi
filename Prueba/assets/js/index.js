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
            alert("Contraseña o Usuario incorrecto!")
        }else{
            window.location.href = 'pantalla2.html';
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
    var pasword = document.getElementById("registro_password").value;
    var foto = document.getElementById("registro_foto").value;

    const URL = `assets/php/servidor.php?peticion=registro&nombre=${nombre}&alias=${alias}&pasword=${pasword}&foto=${foto}` ;
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
                html += `<li  onclick="fCargarMensajes(${item.tema_id})" <span><img class="papelera" src="assets/img/basura.png" alt="" onclick="eliminarTema(${item.tema_id})"></span> `;
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
                html += "<div>" + item.men_mensaje + "" + item.men_fecha_hora + "</div>" ;
                html += `</ul>`;
            });
            html += "<input type='text' id='messageInput' placeholder='Escribe tu mensaje...'>";
            html += `<button onclick='EnviarMensaje(${tema_id})'>Enviar</button>`;
            html += "";
            document.querySelector("section").innerHTML = html;
        })
}

function cerrar(){
    document.getElementById('cerrar').addEventListener('click', function(){
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
            alert("Tema no se a podido crear");
        }else {
            alert("Tema Creado");
            window.location.href = 'pantalla2.html';
        }
    })
    .catch(() => {
        window.location.href = 'pantalla2.html';
    });
}


function EnviarMensaje(tema_id){
    var mensaje = document.getElementById("messageInput").value ;

    const URL = `assets/php/servidor.php?peticion=enviarMensaje&mensaje=${mensaje}&tema_id=${tema_id}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        if (data.length == 0){
            alert("Mensaje no se a podido enviar");
        }else {
            alert("Mensaje Enviado");
            window.location.href = 'inicio.html';
        }
    })

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
        console.log(data);
        if (data.length == 0){
            alert("Tema no se a podido borrar");
        }else {
            alert("Tema Borrado");
            window.location.href = 'pantalla2.html';
        }
    })
    .catch(() => {
        window.location.href = 'pantalla2.html';
    });
}

function borrarMensaje(men_id){

    const URL = `assets/php/servidor.php?peticion=borrarMensaje&men_id=${men_id}`;
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
}

/*
document.addEventListener("DOMContentLoaded", function () {
    const entradaBusqueda = document.getElementById("entradaBusqueda");
    const btnBuscar = document.getElementById("btnBuscar");
    const listaTemas = document.getElementById("listaTemas");

    function renderizarListaTemas(temasRenderizados) {
        listaTemas.innerHTML = "";
        temasRenderizados.forEach(tema => {
            const elementoTema = document.createElement("li");
            elementoTema.className = "tema";
            elementoTema.textContent = `${tema.nombre} - ${tema.descripcion}`;
            elementoTema.addEventListener("click", () => {
                console.log("Tema seleccionado:", tema);
            });
            listaTemas.appendChild(elementoTema);
        });
    }
/*
    function manejarBusqueda() {
        const terminoBusqueda = entradaBusqueda.value.toLowerCase();

        // Realizar la solicitud al servidor PHP para obtener los temas
        fetch(`servidor.php?termino=${terminoBusqueda}`)
            .then(response => response.json())
            .then(data => renderizarListaTemas(data))
            .catch(error => console.error("Error al obtener temas:", error));
    }

    btnBuscar.addEventListener("click", manejarBusqueda);

    // Renderizar la lista inicial al cargar la página
    manejarBusqueda();*/
    