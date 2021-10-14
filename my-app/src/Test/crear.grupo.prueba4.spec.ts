import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Crear Grupo - agregarMiembroGrupo en Controlador.js', () => {

    it(`Proceso de agregarMiembroGrupo con los datos correctos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        var idMiembro= '1'
        var ingreso = 0
        var result = controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo,idMiembro);
        if (result.length>=1){
            ingreso = 1
        }
        expect(ingreso).toEqual(1);
    })
    it(`Proceso de agregarMiembroGrupo con alguno de los formatos no válido`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = null;
        var idMiembro= '1'
        var ingreso=0
        var result = controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo,idMiembro);
        if (result.length>=1){
            ingreso = 1
        }
        expect(ingreso).toEqual(1);
    })
    it(`Proceso de agregarMiembroGrupo con grupo inexistente`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '10';
        var idMiembro= '1'
        var ingreso=0
        var result = controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo,idMiembro);
        if (result.length>=1){
            ingreso = 1
        }
        expect(ingreso).toEqual(1);
    })
    it(`Proceso de agregarMiembroGrupo con miembro inexistente`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        var idMiembro= '15'
        var ingreso=0
        var result = controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo,idMiembro);
        if (result.length>=1){
            ingreso = 1
        }
        expect(ingreso).toEqual(1);
    })
})