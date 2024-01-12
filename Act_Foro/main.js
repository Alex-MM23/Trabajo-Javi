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
    .catch(error => {
        console.error('Error en la solicitud fetch:', error);
    });
}

function ftemas() {
    const URL = 'php/servidor.php?peticion=lista_temas';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<ul>";
        data.forEach(item => {
            html += "<li onclick='CargarLibros(" + item.tema_id + ")'>" + item.tema_tema + "</li>";
        });
        html += "</ul>";
        document.getElementById("contet-temas").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });

    CargarMensaje();    
}

function CargarMensaje() {
    const URL = 'php/servidor.php?peticion=lista_mensajes';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<div class='mensaje'>";
        data.forEach(item => {
            html += "<div class='informacion-usuario'>";
            html += "   <span class='nombre-usuario'>Nombre del Usuario </span>";
            html += "   <span class='fecha-publicacion'>" + item.men_fecha_hora + " </span>";
            html += "</div>";
            html += "<div class='contenido-mensaje'>";
            html += "   <span>" + item.men_mensaje + "</span>";
            html += "</div>";
        });
        html += "</div>";
        document.getElementById("contenido").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });
}