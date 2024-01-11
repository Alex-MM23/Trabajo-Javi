<?php
require_once("BBDD_CTRLR.php");
// $sql = "SELECT * FROM pintores ORDER BY pin_nombre";
//             $resp['sql']=$sql;
//             $resp['datos'] = BBDD_CTRLR::Consultas($sql);
// echo '<pre>';
// var_export($resp);
// echo '</pre>';
if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case "lista_temas":
            $sql = "SELECT * FROM temas ORDER BY id_tema";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        // case "lista_libros":
        //     if (isset($_REQUEST['id_tema'])) {
        //         $id_tema = $_REQUEST['id_tema'];
        //         $sql = "SELECT libros.ISBN, libros.titulo, libros.autor, libros.imagen , libros.precio_unitario
        //         FROM libros
        //         INNER JOIN temas ON libros.id_tema_libro = tema.id_tema
        //         WHERE tema.id_tema = $id_tema";
        //         $datos = BBDD_CTRLR::Consultas($sql);
        //         echo json_encode($datos);
        //     }
        //     break;
        case "lista_libros":
            $sql = "SELECT * FROM libros ORDER BY ISBN";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
    }
}