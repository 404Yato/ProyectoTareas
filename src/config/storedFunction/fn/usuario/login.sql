
/**
 * Name: fn_validar_usuario
 * Creator: Cristian Tapia
 * Description: Validar login usuario
 * Date: 22-12-2022
 * Modified: 18-01-2023
 * select * from fn_validar_usuario('prueba','prueba')
 */

CREATE OR REPLACE FUNCTION fn_validar_usuario(
	p_username character varying,
	p_pass character varying)
    RETURNS TABLE(id_user integer, name character varying, lastname character varying, rol_id_rol integer) 
    LANGUAGE 'plpgsql'
    COST 100
    VOLATILE PARALLEL UNSAFE
    ROWS 1000

AS $BODY$
    BEGIN
        IF(p_username is null or not exists(select u.username from usuario as u where u.username = p_username ))then
            RAISE 'El nombre de usuario no existe';
        ELSEIF(p_pass is null or not exists(select u.username, u.password from usuario as u where u.username = p_username and u.password = p_pass)) THEN
            RAISE 'La contraseña ingresada es incorrecta';
        END IF;

        RETURN QUERY
          SELECT u.id_user, u.name, u.lastname, u.rol_id_rol FROM USUARIO AS u WHERE u.username = p_username and u.password = p_pass;
        exception 
        when others then 
            RAISE;
    END;
$BODY$;