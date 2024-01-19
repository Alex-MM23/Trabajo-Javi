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
        case "lista_temas_admin":
            $sql = "SELECT * FROM temas ORDER BY tema_id";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "lista_mensaje":
            $temas = $_REQUEST['temas'];
            $sql =  "SELECT * FROM mensajes WHERE men_tema_id = $temas";
            $datos['sql'] = $sql;
            $datos['datos'] = BBDD_CTRLR::Consultas($sql);
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
            $pasword = md5($_REQUEST["password"]);
            $foto = $_REQUEST["foto"];
            $sql = "INSERT INTO usuarios VALUES (null, '$nombre', '$alias', '$password', '$foto', 0)";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "enviarMensaje":
            $mensaje = $_REQUEST["mensaje"];
            $tema_id = $_REQUEST["tema_id"];
            $usu_id = 1;
            $sql = "INSERT INTO mensajes VALUES (null,'$mensaje', $tema_id, $usu_id, NOW())";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "crearTema":
            $tema = $_REQUEST["tema"];
            $sql = "INSERT INTO temas VALUES (null,'$tema')";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "borrarTema":
            $tema_id = $_REQUEST["tema_id"];
            $sql = "DELETE FROM temas WHERE tema_id ='$tema_id' ";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "borrarMensaje":
            $men_id = $_REQUEST["men_id"];
            $sql = "DELETE FROM mensajes WHERE men_id ='$men_id' ";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
    }
}