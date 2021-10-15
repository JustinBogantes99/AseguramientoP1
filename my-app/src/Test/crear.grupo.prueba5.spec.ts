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
        var nombre = 'Rescate de Gatos Callejeros'
        var idEncargado1 = '12345678';
        var idEncargado2 = null;
        var isMonitor = true;
        var getGrupo=1
        dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
        controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
        var result = controller.getGrupo(idMovimiento, idZona, idRama, idGrupo)
        if (result==null){
            getGrupo=0
        }
        expect(getGrupo).toEqual(1);
    })
    it(`Proceso de getGrupo con movimiento ingresado no existe`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '4024208401';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        var nombre = 'Rescate de Gatos Callejeros'
        var idEncargado1 = '12345678';
        var idEncargado2 = null;
        var isMonitor = true;
        var getGrupo=1
        dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
        controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
        var result = controller.getGrupo(idMovimiento, idZona, idRama, idGrupo)
        if (result==null){
            getGrupo=0
        }
        expect(getGrupo).toEqual(1);
    })
    it(`Proceso de getGrupo con el grupo ingresado no existente`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        var nombre = 'Rescate de Gatos Callejeros'
        var idEncargado1 = '12345678';
        var idEncargado2 = null;
        var isMonitor = true;
        var getGrupo=1
        dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
        controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
        var result = controller.getGrupo(idMovimiento, idZona, idRama, '11')
        if (result==null){
            getGrupo=0
        }
        expect(getGrupo).toEqual(1);
    })
})