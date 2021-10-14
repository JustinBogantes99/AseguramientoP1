import { Miembro } from '../02-Stub/Stub-miembro.spect'

//Clase Dao
export class FakeDao {
    //Atributos, lista de noticias
    noticias:Array<any>
    miembros:Array<any>
    wasSaved: boolean;
    wasError: boolean;

    constructor(){
        this.noticias = []
        this.miembros = []
        this.wasError=false
        this.wasSaved=false
    }

    addNoticias(noticia:Object){
        this.noticias.push(noticia)
    }

    getNoticias(){
        return this.noticias
    }

    addMiembros(miembro:Miembro){
        this.miembros.push(miembro)
    }

    getNoticiasMiembro(idMiembro:String){
        for(var i = 0; i < this.miembros.length; i++){
            if(this.miembros[i].getid() == idMiembro){
                return this.miembros[i].getNoticias()
            }
        }
        return null
    }
    getNoticiaXMiembro(idNoticia:String,idMiembro:String){
        var variables = [idNoticia, idMiembro]
        var lista = []
        for(var i = 0; i < variables.length; i++){
            if(variables[i] === null){
                this.wasError = true;
            }
        }
        //console.log('PASE 1')
        for(var j = 0; j < this.miembros.length; j++){
            //console.log('PASE 2')
            if(this.miembros[j].getid() == idMiembro){
                //console.log('PASE 3')
                var noticias = this.miembros[j].getNoticias()
                //console.log(noticias)
                for(var k=0; k < noticias.length;k++){
                    //console.log('PASE 4')
                     if (noticias[k].idNoticia==idNoticia){
                         lista.push(noticias[k])
                         return lista
                     }
                }
            }
        }
        return null
    }
    getNoticiaAsesor(idMiembro:String){
        for(var i = 0; i < this.miembros.length; i++){
            if(this.miembros[i].getid() == idMiembro && this.miembros[i].posible_monitor==true){
                return this.miembros[i].getNoticias()
            }
        }
        return null
    }
}