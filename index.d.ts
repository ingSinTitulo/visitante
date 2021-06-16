export default class Visitante {
    private static userAgent;
    private static readonly __OS;
    private static getUA;
    private static parse;
    static OS(userAgent?: string): "Desconocido" | string[];
}
/**
 * Crear nueva tarea en el workflow para compilar el typescript arriba y no incluirlo en el git
 * Terminar de escrapear todas las listas
 * Agregar columnas a todas las listas con los resultados esperados
 * Crear tester basado en las listas en CSV y las columnas de resultados esperados
 * Crear documentador para detectar en cuales registros no arrojo el resultado esperado
 * Agregar navegador
 * Agregar version del navegador
 * Agregar layout engine
 * Agregar version del layout engine
 * Agregar tipo de dispositivo
 * Agregar tipo de software
 * Agregar nombre de dispositivo
 * Agregar arquitectura
 * Crear slugger
 * Hacer funcion que pregunta directamente si es uno u otro preguntando por slugger o nombre
 * Hacer getters
 * Crear booleanos para saber si es uno u otro
 * En el caso de navegador, desempaquetar el objeto navigator para obtener informacion del dispositivo
 * En el caso de node, preguntar todas las cosas de hardware que se puedan
 * En el caso de deno, desenvolver todo el objeto Deno
 * Comparar con respuestas de otras librerias que hagan lo mismo
 * Crear API para extender o modificar validaciones
 * Crear una pagina que muestre los datos del cliente, y si no estan, que muestre un formulario para registrar
 * Crear una API y en caso de que no exista el registro enviarle una respuesta que pida el registro
 * Crear un parser para express
 * Crear inyectable para angular
 * Crear documentacion
 * Crear una landing para el proyecto
 */ 
