import { Movimiento } from './fake-movimiento.spect'
import { Miembro } from '../02-Stub/Stub-miembro.spect'
import {stubController} from '../02-Stub/Stub-controller.spect' 
import { DAO } from '../03-Spy/spy-dao.spect'
import { stubZona } from '../02-Stub/Stub-zona.spect'

export class GestorNodos{
    zonas:Array<stubZona>
    wasSaved: boolean;
    wasError: boolean;
    constructor(){
        this.zonas = new Array<stubZona>();
        this.wasError=false
        this.wasSaved=false
    }
    getGrupo(idZona:String, idRama:String, idGrupo:String){
        var variables = [idZona, idRama,idGrupo]
        var lista = []
        for(var x = 0; x < variables.length; x++){
            if(variables[x] === ''){
                this.wasError = true;
            }
        }
        for(var i = 0; i < this.zonas.length; i++){
            var zona = this.zonas[i]
            console.log('Zona:',zona)
            if(idZona == zona.getZona()){
                return zona
            }
        }
        return null 
    }
    addZona(zona:stubZona){
        this.zonas.push(zona)
    }
}