//Clase Stub-Miembro
export class Miembro{
    //Atributos de Miembro
    id: String
    nombre: String
    celular: number
    email: String
    provincia: String
    canton: String
    distrito: String
    senas: any
    posible_monitor: boolean
    noticias: Array<any>

    //Constructor agarra información por parámetro y la coloca en atributos
    constructor(id: String, nombre: String, celular: any, email: String, provincia: String, canton: String, distrito: String, senas: any, posible_monitor: boolean, noticias: Array<any>|null){
        this.id = id;
        this.nombre = nombre;
        this.celular = celular;
        this.email = email;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.senas = senas;
        this.posible_monitor = posible_monitor;
        if(noticias){
            this.noticias = noticias;
        }else{
            this.noticias = [];
        }
        
    }

    //Devuelve el id del miembro
    getid(){
        return this.id
    }
}