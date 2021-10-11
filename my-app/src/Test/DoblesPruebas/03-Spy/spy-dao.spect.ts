//Clase Spy-Dao
export class DAO {
    //Atributos bandera para saber si guardó en base de datos o si tuvo un error
    wasSaved: boolean;
    wasError: boolean;

    //Constructor pone como false todas las banderas
    constructor(){
        this.wasSaved = false;
        this.wasError = false;
    }

    //Función que se dedica a simular insertarGrupo de Controlador.js, si se realiza el insert, levanta wasSaved, si hay un nulo, levanta wasError
    insertarGrupo(idMovimiento:String, idZona:String, idRama:String, idGrupo:String | null, bMonitores:boolean, pNombre:String, idMonitor1:String, idMonitor2: string | null){
        if(!idMonitor2){
            idMonitor2 = "";
        }
        //Simulando inserción a la BD
        var variables = [idMovimiento, idZona, idRama, idGrupo, bMonitores, pNombre, idMonitor1, idMonitor2]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.wasSaved = true;
        }
    }

    //Devuelve wasSaved
    salvado(){
        return this.wasSaved;
    }

    //Devuelve wasError
    error(){
        return this.wasError;
    }
}