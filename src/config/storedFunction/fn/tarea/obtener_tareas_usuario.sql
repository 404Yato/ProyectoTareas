/**
 * Name: fn_obtener_tareas_usuario
 * Creator: Cristian Tapia
 * Description: Obtener todas las tareas que corresponden a un usuario
 * Date: 24-01-2023
 * SELECT * FROM fn_obtener_tareas_usuario(1)
 */

CREATE OR REPLACE FUNCTION fn_obtener_tareas_usuario(
	p_id_usuario INTEGER
	)
    RETURNS TABLE(id_tarea integer, descripcion character varying, nombre_tarea character varying,
				  fecha_inicio timestamp without time zone , fecha_termino timestamp without time zone,
				  id_emisor integer, usuario_id_user integer, estado_tarea_id_estado integer,
				  nivel_importancia_id_nivel integer,nombre_estado character varying, nombre_nivel character varying) 
    LANGUAGE 'plpgsql'

AS $FUNCTION$

BEGIN
    RETURN QUERY
      SELECT t.id_tarea, t.descripcion, t.nombre_tarea, t.fecha_inicio, t.fecha_termino, t.id_emisor, t.usuario_id_user,
		t.estado_tarea_id_estado, t.nivel_importancia_id_nivel, e.nombre_estado, n.nombre_nivel FROM tarea t
		JOIN estado_tarea e ON e.id_estado = t.estado_tarea_id_estado
		JOIN nivel_importancia n ON n.id_nivel = t.nivel_importancia_id_nivel
		WHERE p_id_usuario = t.usuario_id_user;
    exception 
    when others then 
        RAISE;
END;
$FUNCTION$;