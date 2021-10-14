import { Movimiento } from './fake-movimiento.spect'
import { Miembro } from '../02-Stub/Stub-miembro.spect'
import {stubController} from '../02-Stub/Stub-controller.spect' 
import { DAO } from '../03-Spy/spy-dao.spect'
import { stubZona } from '../02-Stub/Stub-zona.spect'

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
        var lista=[]
        for(var i = 0; i < this.movements.length && !encontrado; i++){
            if(this.movements[i].getCedula_juridica() == idMovimiento){
                movimiento = this.movements[i];

                grupo = this.movements[i].getGrupo(idGrupo);
                miembro = movimiento.getMiembro(idMiembro);
                if(grupo)grupo.miembros.push(miembro)

                lista.push(true)
                encontrado = true
            }
        }
        return lista
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
    getGrupo(idMovimiento:String, idZona:String, idRama:String, idGrupo:String | null){
        var m = null;
        this.movements.forEach(movimiento => {
            if (movimiento.getGrupo(idGrupo) == idGrupo) m = movimiento;
        });
        return m;
    }
    verificarEliminarJefe(zona:stubController| null, idJefeViejo:String | null){
        if(zona?.getencargado1() == idJefeViejo || zona?.getencargado1() == idJefeViejo){
            return true;
        }
        return false
    }
    modificarRama(dao:DAO,idMovimiento:String | null, idZona:String | null, idRama:String | null , nombre:String | null, idJefeNuevo1:String | null, idJefeNuevo2:String | null, idJefeViejo1:String | null, idJefeViejo2:String | null){
        var m = null;
        var zona = new stubController('1','1','2');
        if(idJefeNuevo1 != idJefeViejo1 && idJefeViejo1 && idJefeNuevo2 != idJefeViejo1){
            if (this.verificarEliminarJefe(zona, idJefeViejo1)==true){
                dao.listaBolean.push(true)
            }
            dao.eliminarJefeRama(idJefeViejo1,idZona,idRama, idMovimiento)
        }
        if(idJefeNuevo2 != idJefeViejo2 && idJefeViejo2 && idJefeNuevo1 != idJefeViejo2){
            if (this.verificarEliminarJefe(zona, idJefeViejo1)==true){
                dao.listaBolean.push(true)
            }dao.eliminarJefeRama(idJefeViejo2,idZona, idRama, idMovimiento)
        }
        if(idJefeNuevo1 && idJefeNuevo1 != idJefeViejo1 && idJefeNuevo1 != idJefeViejo2){
            dao.asignarJefeRama(idJefeNuevo1, idZona, idRama)
        }
        if(idJefeNuevo2 && idJefeNuevo2 != idJefeViejo1 && idJefeNuevo2 != idJefeViejo2){
            dao.asignarJefeRama(idJefeNuevo2,idZona,idRama)
        }
    }

    modificarZona(dao:DAO, idMovimiento:String | null, idZona:String | null , nombre:String | null, idJefeNuevo1:String | null, idJefeNuevo2:String | null, idJefeViejo1:String | null, idJefeViejo2:String | null){
        if(idJefeNuevo1 != idJefeViejo1 && idJefeViejo1 && idJefeNuevo2 != idJefeViejo1){
            dao.eliminarJefeZona(idJefeViejo1,idZona, idMovimiento)
        }

        if(idJefeNuevo2 != idJefeViejo2 && idJefeViejo2 && idJefeNuevo1 != idJefeViejo2){
            dao.eliminarJefeZona(idJefeViejo2,idZona, idMovimiento)
        }

        if(idJefeNuevo1 && idJefeNuevo1 != idJefeViejo1 && idJefeNuevo1 != idJefeViejo2){
            dao.asignarJefeZona(idJefeNuevo1, idZona, idMovimiento)
        }
        
        if(idJefeNuevo2 && idJefeNuevo2 != idJefeViejo1 && idJefeNuevo2 != idJefeViejo2){
            dao.asignarJefeZona(idJefeNuevo2, idZona, idMovimiento)
        }

        var zona = new stubZona();
        if(zona.nombre != nombre){
            dao.modificarZona(idMovimiento,idZona,nombre)
        }
    }
}