import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'
import {stubController} from './DoblesPruebas/02-Stub/Stub-controller.spect' 


describe('Asignar jefes de zonas y ramas - modificarZona en DAO.js', () => {

    it(`Proceso de modificarZona con los datos correctos`, () => {
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombre = '1';
        const dao = new DAO();
        dao.modificarZona(idMovimiento,idZona,nombre)
        var valor= dao.listaBolean
        expect(valor[0]).toEqual(true);
    })
    it(`Proceso de modificarZona con los datos incorrectos`, () => {
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombre = null;
        const dao = new DAO();
        dao.modificarZona(idMovimiento,idZona,nombre)
        var valor= dao.listaBolean
        var result=false
        if (valor.length==0){
            result=true
        }
        expect(result).toEqual(true);
    })
})