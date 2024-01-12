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



// function login() {
//     var username = document.getElementById("alias").value;
//     var password = document.getElementById("password").value;

//     const URL = `php/servidor.php?peticion=login&alias=${username}&password=${password}`;
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data)
//         if (data.length == 0){
//             window.location.href = 'index.html';
//             alert("Contraseña o Usuario incorrecto!")
//         }else{
//             window.location.href = 'inicio.html';
//         }
//     })
//     .catch(error => {
//         console.error('Error en la solicitud fetch:', error);
//     });
// }



