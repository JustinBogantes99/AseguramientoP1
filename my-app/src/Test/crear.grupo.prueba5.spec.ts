import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Crear Grupo - getGrupo en Controlador.js', () => {

    it(`Proceso de getGrupo con los datos correctos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de getGrupo con movimiento ingresado no existe`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420841';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
    it(`Proceso de getGrupo con el grupo ingresado no existente`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '15';
        controller.getGrupo(idMovimiento, idZona, idRama, idGrupo);
        expect(controller.getMovement(0).gNodos.length).toEqual(0);
    })
})