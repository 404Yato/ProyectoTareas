/**
 * Name: fn_obtener_usuario
 * Creator: Byron
 * Description: Obtener todos los usuarios del sistema
 * Date: 23-12-2022
 * select * from fn_obtener_usuario()
 */

CREATE OR REPLACE FUNCTION fn_obtener_usuario()
    RETURNS TABLE(id_user integer, name varchar, lastname varchar, email varchar, password varchar, username varchar, rol_id_rol integer )
LANGUAGE 'plpgsql'
AS $function$

BEGIN

    RETURN QUERY
      SELECT * FROM USUARIO; 
    exception 
    when others then 
        RAISE;
END;
$function$;