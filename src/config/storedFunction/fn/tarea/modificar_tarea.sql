/**
 * Name: fn_delete_tarea
 * Creator: Cristian Tapia
 * Description: Actualizar 
 * Date: 21-12-2022
 * SELECT * FROM fn_update_tarea(1, 'Descripcion Actualizada 2', 'Tarea', NOW()::timestamp, NOW()::timestamp, 1, 1, 1)

 */
CREATE OR REPLACE FUNCTION fn_update_tarea(
	p_id_tarea integer,
	p_desc character varying,
	p_nombre_tarea character varying,
	p_fecha_i timestamp without time zone,
	p_fecha_t timestamp without time zone,
	p_usuario_id integer,
	p_estado_tarea integer,
	p_nivel_importancia integer)
    RETURNS TABLE(id_tarea integer) 
    LANGUAGE 'plpgsql'

AS $FUNCTION$
DECLARE
v_id_tarea integer;
	BEGIN
		UPDATE tarea AS ta SET descripcion = p_desc,
						nombre_tarea = p_nombre_tarea,
						fecha_inicio = p_fecha_i,
						fecha_termino = p_fecha_t,
						usuario_id_user = p_usuario_id,
						estado_tarea_id_estado = p_estado_tarea,
						nivel_importancia_id_nivel = p_nivel_importancia
					 WHERE ta.id_tarea = p_id_tarea;
		v_id_tarea:= p_id_tarea;
		RETURN QUERY
			SELECT v_id_tarea;
		EXCEPTION
		WHEN OTHERS THEN
			RAISE;
	END;
$FUNCTION$;
