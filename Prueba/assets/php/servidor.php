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
            $nombre = $_REQUEST["nombre"];
            $alias = $_REQUEST["alias"];
            $password = $_REQUEST["password"];
            $foto = $_REQUEST["foto"];
            $sql = "INSERT INTO usuarios (usu_nombre, usu_alias, usu_password, usu_foto) VALUES (:nombre, :alias, :password, :foto)";
            $datos = BBDD_CTRLR::Consultas($sql);
            echo json_encode($datos);
            break;
        case "fAgregar":
            $men_mensaje = $_REQUEST['men_mensaje'];
            $men_tema_id = $_REQUEST['men_tema_id'];

            $sql = "INSERT INTO mensajes VALUES (null, '$men_mensaje', $men_tema_id, '1', null)";

            $forma_de_respuesta = "id";
            $datos['sql'] = $sql;
            $datos['respuesta'] = BBDD_CTRLR::CRUD($sql, $forma_de_respuesta);
            // Devuelvo los datos codificados en JSON
            echo json_encode($datos);
            break; 
        
        
    }
}
?>
