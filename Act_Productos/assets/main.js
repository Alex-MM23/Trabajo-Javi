function ftemas() {
    const URL = 'php/servidor.php?peticion=lista_temas';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<ul>";
        data.forEach(item => {
            html += "<li onclick='CargarLibros(" + item.id_tema + ")'>" + item.desc_tema + "</li>";
        });
        html += "</ul>";
        document.getElementById("contet-temas").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });

    CargarLibros();
    
}

function CargarLibros() {
    const URL = 'php/servidor.php?peticion=lista_libros';
    fetch(URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
        let html = "<ul class='libros-lista'><li class='libro-item'>";
            data.forEach(item => {
                html += "<p class='libro-titulo'>" + item.titulo + "</p>";
                html += "<img class='libro-imagen' src='assets/img/" + item.imagen + "' alt='Foto'>";
                html += "<p class='libro-autor'>" + item.autor + "</p>";
                html += "<p class='libro-precio'>" + item.precio_unitario + "</p>";
            });
            html += "</li></ul>";
            document.getElementById("contenido").innerHTML = html;
    })
    .catch((error) => {
        console.error('Error en la solicitud fetch:', error);
    });
}

// function CargarLibros(id_tema) {
//     const URL = 'php/servidor.php?peticion=lista_libros&id_tema=' + id_tema;
//     fetch(URL)
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);
//         let html = "<div class='content-libros'>";
//             data.forEach(item => {
//                 html += "<img src='img/" + item.imagen + "' alt='Foto'>";
//                 html += "<p>" + item.titulo + "</p>";
//                 html += "<p>" + item.autor + "</p>";
//                 html += "<p>" + item.precio_unitario + "</p>";
//             });
//             html += "</div>";
//             document.querySelector("section").innerHTML = html;
//     })
//     .catch((error) => {
//         console.error('Error en la solicitud fetch:', error);
//     });
// }