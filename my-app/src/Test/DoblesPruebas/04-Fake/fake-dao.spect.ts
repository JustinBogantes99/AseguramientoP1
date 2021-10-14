import { Miembro } from '../02-Stub/Stub-miembro.spect'

//Clase Dao
export class FakeDao {
    //Atributos, lista de noticias
    noticias:Array<any>
    miembros:Array<any>

    constructor(){
        this.noticias = []
        this.miembros = []
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
}