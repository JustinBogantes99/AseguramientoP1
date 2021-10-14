//Clase Spy-Dao
export class DAO {
    //Atributos bandera para saber si guardó en base de datos o si tuvo un error
    wasSaved: boolean;
    wasError: boolean;
    listaBolean: Array<boolean>;
    //Constructor pone como false todas las banderas
    constructor(){
        this.wasSaved = false;
        this.wasError = false;
        this.listaBolean=[]
    }

    //Función que se dedica a simular insertarGrupo de DAO.js, si se realiza el insert, levanta wasSaved, si hay un nulo, levanta wasError
    insertarGrupo(idMovimiento:String | null, idZona:String | null, idRama:String | null, idGrupo:String | null, bMonitores:boolean | null, pNombre:String | null, idMonitor1:String | null, idMonitor2: string | null){
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

    //Función que se dedica a simular insertarJefeRama de DAO.js, si se realiza el insert, levanta wasSaved, si hay un nulo, levanta wasError
    insertarJefeRama(cedulaMiembro: String |null, idZona: String |null, idRama: String |null, idMovimiento: String |null){

        //Simulando inserción a la BD
        var variables = [cedulaMiembro, idZona, idRama, idMovimiento]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.wasSaved = true;
        }
    }

    //Función que se dedica a simular asignarJefeZona de DAO.js, si se realiza el insert, levanta wasSaved, si hay un nulo, levanta wasError
    asignarJefeZona(cedulaMiembro: String |null, idZona: String |null, idMovimiento: String |null){
        //Simulando inserción a la BD
        var variables = [cedulaMiembro, idZona, idMovimiento]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.wasSaved = true;
        }
    }

    agregarMiembroGrupo(idMovimiento:String | null, idZona:String | null, idRama:String | null, idGrupo:String | null, idMiembro:String ){
        var variables = [idMovimiento, idZona, idRama, idGrupo, idMiembro]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.wasSaved = true;
        }
    }

    // simula noticiasMiembro en DAO.js
    async noticiasMiembro(pIdMovimiento:String | null, pIdMiembro:String | null){

        //digamos que hay un movimiento con este id y este miembro
        var idMovimiento = '402420840';
        var idMiembro = '12345678';

        if(idMovimiento==pIdMovimiento && idMiembro==pIdMiembro){
            this.wasSaved = true;
        }
        else this.wasError = true;


    }

    eliminarJefeRama(idJefeViejo1:String | null,idZona:String | null,idRama:String | null, idMovimiento:String | null){
        var variables = [idMovimiento, idZona, idRama, idMovimiento,idJefeViejo1]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.listaBolean.push(true)
        }
    }
    asignarJefeRama(cedulaMiembro: String |null, idZona: String |null, idMovimiento: String |null){
        //Simulando inserción a la BD
        var variables = [cedulaMiembro, idZona, idMovimiento]
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        if(!this.wasError){
            this.listaBolean.push(true)
        }
    }
    async noticiaLeida(pIdNoticia:String | null, pIdMiembro:String | null){

        //digamos que hay una noticia con este id y este miembro
        var idNoticia = '1';
        var idMiembro = '12345678';

        if(pIdNoticia==idNoticia && idMiembro==pIdMiembro){
            this.wasSaved = true;
        }
        else this.wasError = true;


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