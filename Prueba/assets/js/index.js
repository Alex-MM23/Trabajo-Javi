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

function registro(){
    var username = document.getElementById("alias").value;
    var password = document.getElementById("password").value;
    /*var email = document.getElementById("email").value;*/
    
    const URL = `assets/php/servidor.php?peticion=login&alias=${username}&password=${password}`;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.length == 0){
            window.location.href = 'register.html';
            
        }else{
            window.location.href = 'index.html';
             
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
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
                html += `<li onclick="fCargarMensajes(${item.tema_id})">`;
                html += item.tema_tema;
                html += '</li>';
            });
            html += "</ul>"
            document.querySelector("nav").innerHTML = html;
        });

    // fCargarMensajes();
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
                html += "<div>" + item.men_mensaje + "" + item.men_fecha_hora + "</div>";
                html += `</ul>`;
            });
            html += "";
            document.querySelector("section").innerHTML = html;
        })
}

function cerrar(){
    document.getElementById('cerrar').addEventListener('click', function(){
        window.location.href = 'index.html';
    })
}

function fAgregar(){
    document.querySelector("#mensajes_accion").value=accion;
    document.querySelector("#mensajes_id").value=id;
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        if (data.length == 0){
            window.location.href = 'agregar.html';
            
        }else{
            window.location.href = 'pantalla2.html';
             
        }
    })
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
    });
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
    