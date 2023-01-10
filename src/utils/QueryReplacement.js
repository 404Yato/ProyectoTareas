/**
 * Modificar una tarea con un id en especifico
 * @param {Object}  object Objeto para obtener su largo
 * @param {Boolean} isCreate Parametro para identificar el tipo de query a ejecutar | false = Update, true = Create
 * @returns {String} Retorna un string con la cadena a reemplazar en la query
 */


const QueryReplacement =  (object, isCreate) => {
    if( !object ){
        throw new Error("Body invalido");
    }
    const objectLenght= Object.keys(object).length;     //Obtener el largo del objeto
    const cadena = "?,"                                   //Cadena de caracteres para reemplazo en la query
    const result = (isCreate)?0 : 1                     //Ternario para decidir si se suma 1 a la cadena en caso de que la query sea Update
    const cadenaRepeat = cadena.repeat(objectLenght + result).slice(0,-1)                           
    return cadenaRepeat;
}

module.exports = QueryReplacement;
