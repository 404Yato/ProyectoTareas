/**
 * Name: fn_obtener_rols
 * Creator: Hesllar
 * Description: Obtener todos los rol del sistema
 * Date: 04-01-2023
 * select * from fn_obtener_rols()
 */

CREATE OR REPLACE FUNCTION fn_obtener_rols()
    RETURNS TABLE(id_rol smallint, nombre_rol character varying)
LANGUAGE 'plpgsql'
AS $function$

BEGIN

    RETURN QUERY
      SELECT * FROM rol; 
    exception 
    when others then 
        RAISE;
END;
$function$;