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
            $pasword = $_REQUEST["pasword"];
            $foto = $_REQUEST["foto"];
            $sql = "INSERT INTO usuarios (usu_nombre, usu_alias, usu_password, usu_foto) VALUES ('nombre="+$nombre+"', 'alias="+$alias+"', 'pasword="+$password+"', 'foto="+$foto+"')";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "enviarMensaje":
            $mensaje = $_REQUEST["mensaje"];
            $tema_id = $_REQUEST["tema_id"];
            $usu_id = 1;
            $sql = "INSERT INTO mensajes (men_mensaje, men_tema_id, men_usu_id, men_fecha_hora) VALUES ('$mensaje', $tema_id, $usu_id, NOW())";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
    }
}