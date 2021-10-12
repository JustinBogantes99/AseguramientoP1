import { Movimiento } from './fake-movimiento.spect'
import { Miembro } from '../02-Stub/Stub-miembro.spect'

export class Controller {
    //Lista de movimientos para reemplazar una BD
    movements:Array<Movimiento>

    //Constructor que genera un movimiento con información específica y un miembro por default
    constructor(){
        this.movements = new Array<Movimiento>();
        var movimiento = new Movimiento('402420840', '1023456789', 'Un hogar para los perritos ancianos', 'www.perritos-ancianos.com', 'www.perritos-ancianos.com/logo',
        'Costa Rica', 'San José', 'San José', 'Hospital', '')
        movimiento.addMiembro(new Miembro('12345678','Javier Barquero Gen', '84952633', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false,[]))
        this.movements.push(movimiento)
        
    }

    //agregarGrupo simula al agregarGrupo de Controller.js, reemplaza la busqueda del movimiento por una version sencilla para los test, agrega un Grupo a un movimiento
    agregarGrupo(idMovimiento:String | any, idZona:String, idRama:String, idGrupo:String | null, nombre:String, isMonitor:boolean, idEncargado1:String, idEncargado2:String | null){
        var encontrado = false;
        var movimiento;
        for(var i = 0; i < this.movements.length && !encontrado; i++){
            if(this.movements[i].getCedula_juridica() == idMovimiento){
                movimiento = this.movements[i];
                movimiento.addGrupo({id:idGrupo, nombre:nombre, isMonitor:isMonitor, Encargado1: idEncargado1, Encargado2:idEncargado2, miembros:[]})
                encontrado = true
            }
        }
    }

    //agregarGrupo simula al agregarGrupo de Controller.js, reemplaza la busqueda del movimiento por una version sencilla para los test, agrega un grupo a un movimiento
    agregarMiembroGrupo(idMovimiento:String, idZona:String, idRama:String, idGrupo:String | null, idMiembro:String){
        var encontrado = false;
        var movimiento;
        var grupo;
        var miembro;
        for(var i = 0; i < this.movements.length && !encontrado; i++){
            if(this.movements[i].getCedula_juridica() == idMovimiento){
                movimiento = this.movements[i];
                grupo = this.movements[i].getGrupo(idGrupo);
                miembro = movimiento.getMiembro(idMiembro);
                if(grupo)grupo.miembros.push(miembro)
                encontrado = true
            }
        }
    }

    agregarMiembro(index:number, miembro:Miembro){
        this.movements[index].addMiembro(miembro)
    }

    //obtiene un movimiento en un index específico
    // NO ES EL getMovimiento DEL CONTROLADOR.JS
    getMovement(index:number){
        return this.movements[index]
    }

    // getMovimiento de controlador.js
    getMovimiento(idMovimiento:String){
        // revisar si hay movimiento con id especificado en movements y lo retorna
        var m = null;
        this.movements.forEach(movimiento => {
            if (movimiento.cedula_juridica == idMovimiento) m = movimiento;
        });
        return m;

    }
   
}