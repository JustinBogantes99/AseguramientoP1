export class stubController{
    //Atributos
    idZona:String
    encargado1:String
    encargado2:String
    constructor(zona:String,encargado1:String,encargado2:String){
        this.idZona=zona
        this.encargado1=encargado1
        this.encargado2=encargado2
    }
    //Atributos de Miembro 
    getZona()  {
        return this.idZona
    }
    getencargado1()  {
        return this.encargado1
    }
    getencargado2()  {
        return this.encargado2
    }
}