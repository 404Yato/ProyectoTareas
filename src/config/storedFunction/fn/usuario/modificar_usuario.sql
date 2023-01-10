/**
 * Name: fn_modificar_usuario
 * Creator: Israel Castro
 * Description: Modificar usuario
 * Date: 09-01-2023
 * SELECT public.fn_modificar_usuario(1,'pruebaupdate','pruebaupdate','pruebaudate@update','pruebaupdatepassword','pruebaupdate',1)
 */

CREATE OR REPLACE FUNCTION fn_modificar_usuario(
	p_id_usuario integer,
	p_name character varying,
	p_last_name character varying,
	p_email character varying,
	p_password character varying,
	p_username character varying,
	p_rol integer)
    RETURNS TABLE(id_user integer) 
    LANGUAGE 'plpgsql'

AS $FUNCTION$
DECLARE
v_id_user integer;
	BEGIN
		IF(p_rol IS null OR NOT EXISTS (SELECT r.id_rol FROM rol AS r WHERE r.id_rol =p_rol))THEN
			RAISE 'El rol ingresado no existe';
		END IF;
		UPDATE usuario AS us SET name = p_name,
						lastname = p_last_name,
						email = p_email,
						password = p_password,
						username = p_username,
						rol_id_rol = p_rol
					 WHERE us.id_user = p_id_usuario;
		v_id_user:= p_id_usuario;
		RETURN QUERY
			SELECT v_id_user;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
$FUNCTION$;