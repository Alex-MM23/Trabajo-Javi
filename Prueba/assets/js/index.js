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

document.addEventListener("DOMContentLoaded", function() {
    const btnLogin = document.getElementById("btnLogin");

    function manejarLogin() {
        const alias = document.getElementById("alias").value;
        const password = document.getElementById("password").value;

        // Realizar la solicitud al servidor PHP para realizar el login
        // Esta vez, simplemente actualizaremos la página con la URL correcta
        window.location.href = `servidor.php?peticion=login&alias=${encodeURIComponent(alias)}&password=${encodeURIComponent(password)}`;
    }

    btnLogin.addEventListener("click", manejarLogin);
});

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
    manejarBusqueda();
});