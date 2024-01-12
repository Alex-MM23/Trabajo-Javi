<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case 'fCargarTemas':
            $sql = "SELECT * FROM temas ORDER BY tema_tema";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        
        case 'fCargarMensajes':
            $temas=$_REQUEST['temas'];
            $sql =  "SELECT * FROM mensajes WHERE men_tema_id = $temas";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        // case "login":
        //     $alias = $_REQUEST["alias"];
        //     $password = $_REQUEST["password"];
        //     $sql = "SELECT * FROM usuarios WHERE usu_alias='$alias' AND usu_password=MD5('$password')";
        //     $datos = BBDD_CTRLR::Consultas($sql);
        //     echo json_encode($datos);
        //     break;
        // case "registro":
        //     $nombre = $_REQUEST["nombre"];
        //     $alias = $_REQUEST["alias"];
        //     $pasword = $_REQUEST["pasword"];
        //     $foto = $_REQUEST["foto"];
        //     $sql = "INSERT INTO usuarios (usu_nombre, usu_alias, usu_password, usu_foto) VALUES (:nombre, :alias, :pasword, :foto)";
        //     $datos = BBDD_CTRLR::Consultas($sql);
        //     echo json_encode($datos);
        //     break;    
    }
}