class Tarea {

    constructor(
        {
            descripcion,
            nombre_tarea,
            fecha_inicio,
            fecha_termino,
            id_emisor,
            id_usuario,
            id_estado_tarea_id,
            id_nivel_importancia
        }
    ) {
        this.descripcion = descripcion;
        this.nombre_tarea = nombre_tarea;
        this.fecha_inicio = fecha_inicio;
        this.fecha_termino = fecha_termino;
        this.id_emisor = id_emisor;
        this.id_usuario = id_usuario;
        this.id_estado_tarea_id = id_estado_tarea_id;
        this.id_nivel_importancia = id_nivel_importancia;

    }
}