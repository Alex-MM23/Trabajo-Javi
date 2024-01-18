let tema_elegido = 0;
let tema_elegido_nombre = "";

function fVerModal(cual_formulario) {
    fOcultarTodosLosFormularios();
    document.querySelector(cual_formulario).style.display = 'block';
    document.querySelector("#div_modal").style.display = 'flex';
}

function fCerrarmodal() {
    document.querySelector("#div_modal").style.display = 'none';
}

function fOcultarTodosLosFormularios() {
    let lista_formularios = document.querySelectorAll("#div_modal > div");
    lista_formularios.forEach(form => {
        form.style.display = 'none';
    });
}

function fInicio() {
    fCargarTemas();
    document.querySelector("#div_modal").style.display = 'none';
}

function fCargarTemas() {
    let URL = "assets/php/servidor.php?peticion=fCargarTemas";
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta: ", data.respuesta);
            console.log("SQL: ", data.sql);
            // Cuando tenga los datos, los proceso
            let html = "";
            data.respuesta.forEach(item => {
                html += `<div onclick="fCargarMensajes(${item.tema_id})">`;
                html += item.tema_tema;
                html += `   <i class="fas fa-minus" onclick="fBorrarTema(${item.tema_id})" title="Borrar ${item.tema_tema}"></i>`;
                html += "</div>";
            });
            document.querySelector("#div_nav").innerHTML = html;
        })
}
/*
function fBorrarTema(tema_id){
    let URL = 'assets/php/servidor.php?peticion=fBorrarTema';
    URL+= '&tema_id=' + tema_id;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("SQL: " +data.sql);
            console.log("Registro borrado: " + data.respuesta);
            fCargarTemas();
        })
}

function fFormTema(id,accion){
    document.querySelector("#tema_id").value=id;
    document.querySelector("#tema_accion").value=accion;
    fVerModal("#form_tema");
}

function fGrabarTema(){
    let URL = 'assets/php/servidor.php?peticion=fGrabarTema';
    URL+= '&tema_tema=' + document.querySelector("#temas").value.trim();

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("SQL: " +data.sql);
            console.log("Id generado: " + data.respuesta);
            if (data.respuesta == 0){
                document.querySelector("form_error").innerHTML = "No he podido grabar";
                return;
            }
            
            fCerrarmodal();
            fCargarTemas();
        })
}

function fCargarMensajes(tema_id) {
    document.querySelector(".mensajes").style.display = 'block';
    document.querySelector(".Bienvenido").style.display = 'none';
    document.querySelector("section").style.setProperty("align-items", "center");
    document.querySelector("section").style.setProperty("justify-content", "center");
    tema_elegido = tema_id;
    let URL = "assets/php/servidor.php?peticion=fCargarMensajes";
    URL += "&tema_id=" + tema_id;
    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("Respuesta: ", data.respuesta);
            console.log("SQL: ", data.sql);
            // Cuando tenga los datos, los proceso
            let html = "<table id = 'tabla' border='1'>";
            html += "<tr class = 'fila_titulos'>";
            html += "    <th>men_id</th>";
            html += "    <th>men_mensaje</th>";
            html += "    <th>men_tema_id</th>";
            html += "    <th>men_usu_id</th>";
            html += "    <th>men_fecha_hora</th>";
            html += "</tr>";
            data.respuesta.forEach(item => {
                html += `<tr class = 'fila'>`;
                html += "   <td>" + item.men_id + "</td>";
                html += "   <td>" + item.men_mensaje + "</td>";
                html += "   <td>" + item.men_tema_id + "</td>";
                html += "   <td>" + item.men_usu_id + "</td>";
                html += "   <td>" + item.men_fecha_hora + "</td>";
                html += `<td <i class="fas fa-minus" onclick="fBorrarMensajes(${item.men_id})"> </i> </td>`;
                html += "   </td>";
                html += "</tr>";
            });
            html += "</table>";
            document.querySelector("#div_section").innerHTML = html;
        })
}

function fBorrarMensajes(men_id){
    let URL = 'assets/php/servidor.php?peticion=fBorrarMensajes';
    URL+= '&men_id=' + men_id;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("SQL: " +data.sql);
            console.log("Registro borrado: " + data.respuesta);
            fCargarMensajes(tema_elegido);
            
        })
}

function fFormMensajes(accion, id){
    document.querySelector("#mensajes_accion").value=accion;
     document.querySelector("#mensajes_id").value=id;
     fVerModal("#form_mensajes");
}

function fGrabarMensajes(){
    let URL = 'assets/php/servidor.php?peticion=fGrabarMensajes';
    URL+= '&men_mensaje=' + document.querySelector("#mensaje").value.trim();    
    URL+= '&men_tema_id=' + tema_elegido;

    fetch(URL)
        .then((response) => response.json())
        .then((data) => {
            console.log("SQL: " +data.sql);
            console.log("Id generado: " + data.respuesta);
            
            if (data.respuesta == 0){
                document.querySelector("form_error").innerHTML = "No he podido grabar";
                return;
            }
            
            fCerrarmodal();
            fCargarMensajes(tema_elegido);
        })
}*/
