/**
 * Name: fn_obtener_tarea
 * Creator: Victor
 * Description: Obtener todos las tareas del sistema
 * Date: 30-12-2022
 * select * from fn_obtener_tarea()
 */


CREATE OR REPLACE FUNCTION fn_obtener_tarea()
    RETURNS TABLE(id_tarea integer, descripcion varchar, nombre_tarea varchar, fecha_inicio timestamp without time zone, fecha_termino timestamp without time zone, id_emisor integer, usuario_id_user integer, estado_tarea_id_estado integer, nivel_importancia_id_nivel integer)
LANGUAGE 'plpgsql'
AS $function$

BEGIN

    RETURN QUERY
      SELECT * FROM tarea; 
    exception 
    when others then 
        RAISE;
END;
$function$;