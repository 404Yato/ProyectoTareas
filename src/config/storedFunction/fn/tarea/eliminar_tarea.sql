/**
 * Name: fn_delete_tarea
 * Creator: Israel Castro
 * Description: Elimina tarea por id
 * Date: 21-12-2022
 * SELECT public.fn_delete_tarea(1)
 */

CREATE OR REPLACE FUNCTION fn_delete_tarea(
	p_id_tarea int)
	RETURNS BOOL
	LANGUAGE 'plpgsql'
AS $BODY$
DECLARE
v_bool bool;
	BEGIN
		IF(p_id_tarea NOT IN(SELECT ta.id_tarea FROM tarea as ta)) THEN
			RAISE 'La tarea no existe';
		END IF;
		DELETE FROM tarea WHERE p_id_tarea = id_tarea;
		v_bool = true;
		RETURN 
			v_bool;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
$BODY$