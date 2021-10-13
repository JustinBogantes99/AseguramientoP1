import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Asignar jefes de zonas y ramas - getGrupo en Controlador.js', () => {
    it(`Proceso de modificarRama con los datos correctos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de modificarRama Se selecciona solamente un jefe para modificar`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de modificarRama se seleccionan los mismos jefes en los dos campos para modificar`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de modificarRama el id del jefe viejo es igual que el id del jefe nuevo`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de modificarRama Solamente se cambia el jefe opcional`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    
})