/**
 * Name: fn_eliminar_usuario
 * Creator: Israel Castro
 * Description: Eliminar usuario
 * Date: 07-01-2023
 * SELECT public.fn_eliminar_usuario(idusuari)
 */

CREATE OR REPLACE FUNCTION fn_eliminar_usuario(
	p_id_usuario integer)
    RETURNS bool
    LANGUAGE 'plpgsql'
	
AS $BODY$
DECLARE
v_bool bool;
	BEGIN
		IF(p_id_usuario NOT IN(SELECT u.id_user FROM usuario as u)) THEN
			RAISE 'El usuario no existe en la base de datos';
		END IF;
		DELETE FROM usuario WHERE p_id_usuario = id_user;
		v_bool = true;
		RETURN 
			v_bool;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
$BODY$;
