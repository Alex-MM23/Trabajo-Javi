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
            $sql = "SELECT * FROM temas ORDER BY tema_id";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "lista_mensajes":
            // $sql = "SELECT mensajes.men_mensaje, mensajes.men_fecha_hora, mensajes.men_tema_id, mensajes.men_usu_id 
            // FROM mensajes 
            // INNER JOIN temas ON mensajes.men_tema_id = temas.tema_id 
            // INNER JOIN usuarios ON mensajes.men_usu_id = usuarios.usu_id
            // WHERE temas.tema_id = :tema_id";
            $sql = "SELECT * FROM mensajes ORDER BY men_id";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "login":
            $alias = $_REQUEST["alias"];
            $password = $_REQUEST["password"];
            $sql = "SELECT * FROM usuarios WHERE usu_alias='$alias' AND usu_password=MD5('$password')";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "registro":
            $nombre = $_REQUEST["nombre"];
            $alias = $_REQUEST["alias"];
            $pasword = $_REQUEST["pasword"];
            $foto = $_REQUEST["foto"];
            $sql = "INSERT INTO usuarios (usu_nombre, usu_alias, usu_password, usu_foto) VALUES (:nombre, :alias, :pasword, :foto)";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
    }
}