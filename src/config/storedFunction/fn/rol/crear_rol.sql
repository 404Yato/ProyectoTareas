/**
 * Name: fn_crear_rol
 * Creator: Yhuun
 * Description: Crea rol
 * Date: 22-12-2022
 * select * from fn_crear_rol('ADMIN')
 */
CREATE OR REPLACE FUNCTION fn_crear_rol(
	IN  rol character varying)
	RETURNS TABLE (id_rol integer)

LANGUAGE 'plpgsql'
AS $function$
DECLARE
v_id_rol integer;
	BEGIN
	INSERT INTO rol (nombre_rol) VALUES(rol);
	
	v_id_rol:=lastval();
	
	RETURN QUERY
		SELECT v_id_rol;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
$function$
