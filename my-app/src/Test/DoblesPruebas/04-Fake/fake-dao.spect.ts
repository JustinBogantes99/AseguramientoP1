//Clase Dao
export class FakeDao {
    //Atributos, lista de noticias
    noticias:Array<any>


    constructor(){
        this.noticias = []
    }

    addNoticias(noticia:Object){
        this.noticias.push(noticia)
    }

    getNoticias(){
        return this.noticias
    }
}