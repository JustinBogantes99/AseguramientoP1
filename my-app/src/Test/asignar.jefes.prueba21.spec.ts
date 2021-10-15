import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'
import {stubController} from './DoblesPruebas/02-Stub/Stub-controller.spect'

describe('Asignar jefes de zonas y ramas - verificarEliminarJefe   en Controlador.js', () => {

    it(`Proceso de verificarEliminarJefe con los datos correctos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        //--------------------------------------
        var idJefeViejo1 = '1';
        var zona = new stubController('1','1','2');
        //----------------------------------------
        dao.eliminarJefeRama(idJefeViejo1,idZona,idRama, idMovimiento)
        var result=dao.listaBolean
        expect(result[0]).toEqual(true);
    })
    it(`Proceso de verificarEliminarJefe con los datos incorrectos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        //--------------------------------------
        var idJefeViejo1 = null;
        var zona = new stubController('1','1','2');
        //----------------------------------------
        dao.eliminarJefeRama(idJefeViejo1,idZona,idRama, idMovimiento)
        var lista = dao.listaBolean
        var result=false
        if (lista.length==0){
            result=true
        }
        expect(result).toEqual(true);
    })
})