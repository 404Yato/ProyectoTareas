/**
 * Name: fn_crear_usuario
 * Creator: Hesllar Linzmayer
 * Description: Crea usuario
 * Date: 21-12-2022
 * select * from fn_crear_usuario('Prueba','Prueba','Prueba','Prueba','Prueba',1)
 */

CREATE OR REPLACE FUNCTION fn_crear_usuario(
	IN p_nombre character varying,
	IN p_apellido character varying,
	IN p_email character varying,
	IN p_pass character varying,
	IN p_username character varying,
	IN p_rol integer)
	
	RETURNS TABLE(id_usuario integer)
LANGUAGE 'plpgsql'
AS $function$
DECLARE
v_id_usuario integer;
	BEGIN
		IF (p_username in (select u.username from usuario as u)) then
			RAISE 'El usuario ya existe';
		ELSEIF (p_rol is null or not exists(select r.id_rol from rol as r where r.id_rol = p_rol ))then
			RAISE 'Debe ingresar un rol válido';
		END IF;
		INSERT INTO usuario (name, lastname, email, password, username, rol_id_rol)
			VALUES(p_nombre, p_apellido, p_email, p_pass, p_username, p_rol);
			
		v_id_usuario:= lastval();
		RETURN QUERY
		  SELECT v_id_usuario;
		exception 
		when others then 
			RAISE;
	END;

$function$;