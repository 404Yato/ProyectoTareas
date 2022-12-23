/**
 * Name: fn_crear_usuario
 * Creator: Hesllar Linzmayer
 * Description: Crea usuario
 * Date: 21-12-2022
 * select * from fn_crear_usuario('Prueba','Prueba','Prueba','Prueba','Prueba',1)
 */

CREATE OR REPLACE FUNCTION fn_crear_usuario(
	IN nombre character varying,
	IN apellido character varying,
	IN email character varying,
	IN pass character varying,
	IN username character varying,
	IN rol integer)
	
	RETURNS TABLE(id_usuario integer)
LANGUAGE 'plpgsql'
AS $function$
DECLARE
v_id_usuario integer;
	BEGIN
		IF(rol is null or not exists(select r.id_rol from rol as r where r.id_rol = rol ))then
			RAISE 'Debe ingresar un rol válido';
		END IF;
		INSERT INTO usuario (name, lastname, email, password, username, rol_id_rol)
			VALUES(nombre, apellido, email, pass, userName, rol);
			
		v_id_usuario:= lastval();
		RETURN QUERY
		  SELECT v_id_usuario;
		exception 
		when others then 
			RAISE;
	END;
$function$;