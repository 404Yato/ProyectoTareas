/**
 * Name: fn_obtener_usuario_by_id
 * Creator: Hesllar
 * Description: Obtener un usuario por id
 * Date: 29-12-2022
 * select * from fn_obtener_usuario_by_id(1)
 */

CREATE OR REPLACE FUNCTION fn_obtener_usuario_by_id(p_idUsuario integer)
    RETURNS TABLE(id_user integer, name varchar, lastname varchar, email varchar, password varchar, username varchar, rol_id_rol integer )
LANGUAGE 'plpgsql'
AS $function$

BEGIN
	IF(not exists(select u.username from usuario as u where u.id_user = p_idUsuario ))then
          RAISE 'El id del usuario no existe';
    END IF;
		
    RETURN QUERY
      SELECT * FROM USUARIO u where u.id_user = p_idUsuario;
    exception 
    when others then 
        RAISE;
END;
$function$;