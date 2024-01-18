<?php
require_once("BBDD_CTRLR.php");
//Comprobación

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        
        case 'fCargarTemas':

            $sql = "SELECT * FROM temas ORDER BY tema_tema";            
            $datos['sql'] = $sql;
            // Ejecuto el SQL para insertar
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break;   

        case "fGrabarTema";

            $tema_tema = $_REQUEST['tema_tema'];
            $sql = "INSERT INTO temas VALUES (null, '$tema_tema')";
            $forma_de_respuesta = "id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql, $forma_de_respuesta);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break;

        case "fBorrarTema";

            $tema_id = $_REQUEST['tema_id'];
            $sql = "DELETE FROM temas WHERE tema_id = '$tema_id'";
            $forma_de_respuesta = "";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql, $forma_de_respuesta);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break;

        case "fCargarMensajes":

            $tema_id = $_REQUEST['tema_id'];
            $sql = "SELECT * FROM mensajes WHERE men_tema_id = $tema_id ORDER BY men_mensaje";            
            $datos['sql'] = $sql;
            // Ejecuto el SQL para insertar
            $datos['respuesta'] = BBDD_CTRLR::Consultas($sql);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break;  
    
        case "fGrabarMensajes":
            
            $men_mensaje = $_REQUEST['men_mensaje'];
            $men_tema_id = $_REQUEST['men_tema_id'];

            $sql = "INSERT INTO mensajes VALUES (null, '$men_mensaje', $men_tema_id, '1', null)";

            $forma_de_respuesta = "id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql, $forma_de_respuesta);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break; 

        case "fBorrarMensajes":

            $men_id = $_REQUEST['men_id'];
            $sql = "DELETE FROM mensajes WHERE men_id = '$men_id'";
            $forma_de_respuesta = "";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql, $forma_de_respuesta);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break; 
}
}