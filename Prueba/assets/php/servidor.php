<?php
require_once("BBDD_CTRLR.php");

if (isset($_REQUEST['peticion'])) {
    switch ($_REQUEST['peticion']) {
        case 'fCargarTemas':
            // Verificar si se proporcionó un término de búsqueda
            $where = "";
            if (isset($_REQUEST['termino'])) {
                $termino = $_REQUEST['termino'];
                $where = " WHERE tema_tema LIKE '%$termino%'";
            }

            $sql = "SELECT * FROM temas $where ORDER BY tema_tema";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;

        case 'fCargarMensajes':
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
            $alias = $_REQUEST["alias"];
            $password = $_REQUEST["password"];
            $sql = "INSERT INTO usuarios (usu_alias, usu_password) VALUES (:alias, :password)";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "AgregarMensaje":
            $mensaje = $_REQUEST["mensaje"];
            $tema_id = $_REQUEST["tema_id"];
            $usu_id = 1;
            $sql = "INSERT INTO mensajes (men_mensaje, men_tema_id, men_usu_id, men_fecha_hora) VALUES ('$mensaje', $tema_id, $usu_id, NOW())";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break; 
        
        
    }
}
?>
