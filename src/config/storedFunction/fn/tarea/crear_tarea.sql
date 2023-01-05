/**
 * Name: fn_crear_tarea
 * Creator: Byron 
 * Description: Crear tarea
 * Date: 21-12-2022
 * SELECT public.fn_delete_tarea(1)
 */

CREATE OR REPLACE FUNCTION fn_crear_tarea(
	p_descripcion character varying,
	p_nombre_tarea character varying,
	
	p_fecha_inicio timestamp without time zone,
	p_fecha_termino timestamp without time zone,
	
	p_id_emisor integer,
	p_usuario_id_user integer,
	p_estado_tarea_id_estado integer,
	p_nivel_importancia_id_nivel integer)
	
	
    RETURNS TABLE(id_tarea integer) 
    LANGUAGE 'plpgsql'
	
AS $function$
DECLARE
v_id_tarea integer;

	BEGIN		
		INSERT INTO tarea (descripcion, nombre_tarea, fecha_inicio, fecha_termino, id_emisor, usuario_id_user, 
						   estado_tarea_id_estado, nivel_importancia_id_nivel)
						   
			VALUES(p_descripcion, p_nombre_tarea, p_fecha_inicio, p_fecha_termino, p_id_emisor, p_usuario_id_user, p_estado_tarea_id_estado, p_nivel_importancia_id_nivel);
		v_id_tarea:= lastval();
		
        RETURN QUERY
            SELECT v_id_tarea;
        EXCEPTION
        WHEN OTHERS THEN
            RAISE;				
	END;

$function$;