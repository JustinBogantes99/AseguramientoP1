import { Miembro } from '../02-Stub/Stub-miembro.spect'

//Clase Fake-Movimiento
export class Movimiento{
    //Atributos de Movimiento
    cedula_juridica:String
    idAsesor:String
    nombre:String
    direccionWeb:String
    logo:String
    pais:String
    provincia:String
    canton:String
    distrito:String
    senas:any
    gMiembros:Array<any>
    gNodos:Array<any>
    telefonos:Array<any>

    //Contructor recibe una serie de parámetros y los coloca en atributos. No se sabe qué es "senas"
    constructor(cedula:String, idAsesor:String, nombre:String, direccionWeb:String, logo:String, pais:String, provincia:String, canton:String, distrito:String, senas:any){
        this.cedula_juridica = cedula;
        this.idAsesor = idAsesor;
        this.nombre = nombre;
        this.direccionWeb = direccionWeb;
        this.logo = logo;
        this.pais = pais;
        this.provincia = provincia;
        this.canton = canton;
        this.distrito = distrito;
        this.senas = senas;
        this.gMiembros = [];
        this.gNodos = [];
        this.telefonos = [];
    }

    //Añade un miembro a la lista gMiembros
    addMiembro(miembro:Miembro){
        this.gMiembros.push(miembro)
    }

    //Añade un grupo a la lista gNodos
    addGrupo(grupo:Object){
        this.gNodos.push(grupo)
    }

    //Devuelve la cédula jurídica
    getCedula_juridica(){
        return this.cedula_juridica
    }

    //Busca y devuelve un miembro según su id
    getMiembro(idMiembro:String){
        for(var i = 0; i < this.gMiembros.length; i++){
            var miembro = this.gMiembros[i]
            if(idMiembro == miembro.getid()){
                return miembro
            }
        }
        return null
    }

    //Busca y devuelve un grupo según su id
    getGrupo(idGrupo:String | null){
        for(var i = 0; i < this.gNodos.length; i++){
            var grupo = this.gNodos[i]
            if(idGrupo == grupo.id){
                return grupo
            }
        }
        return null
    }

    getNombre(){
        return this.nombre
    }
}