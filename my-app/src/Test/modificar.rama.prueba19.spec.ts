import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Asignar jefes de zonas y ramas - modificarRama  en Controlador.js', () => {
    it(`Proceso de modificarRama con los datos correctos`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        //--------------------------------------
        var nombre = '1';
        var idJefeNuevo1 = '3';
        var idJefeNuevo2 = '4';
        var idJefeViejo1 = '1';
        var idJefeViejo2 = '2';
        //----------------------------------------
        controller.modificarRama(dao, idMovimiento, idZona, idRama,nombre, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2 );
        expect(dao.listaBolean.length).toEqual(6);
    })
    it(`Proceso de modificarRama Se selecciona solamente un jefe para modificar`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //--------------------------------------
        var nombre = '1';
        var idJefeNuevo1 = '3';
        var idJefeNuevo2 = null;
        var idJefeViejo1 = '1';
        var idJefeViejo2 = null;
        //----------------------------------------
        controller.modificarRama(dao, idMovimiento, idZona, idRama,nombre, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2 );
        expect(dao.listaBolean.length).toEqual(6);
    })
    it(`Proceso de modificarRama se seleccionan los mismos jefes en los dos campos para modificar`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //--------------------------------------
        var nombre = '1';
        var idJefeNuevo1 = '3';
        var idJefeNuevo2 = '4';
        var idJefeViejo1 = '2';
        var idJefeViejo2 = '2';
        //----------------------------------------
        controller.modificarRama(dao, idMovimiento, idZona, idRama,nombre, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2 );
        expect(dao.listaBolean.length).toEqual(6);
    })
    it(`Proceso de modificarRama el id del jefe viejo es igual que el id del jefe nuevo`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var idGrupo = '1';
        //--------------------------------------
        var nombre = '1';
        var idJefeNuevo1 = '1';
        var idJefeNuevo2 = '4';
        var idJefeViejo1 = '1';
        var idJefeViejo2 = '2';
        //----------------------------------------
        controller.modificarRama(dao, idMovimiento, idZona, idRama,nombre, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2 );
        expect(dao.listaBolean.length).toEqual(6);
    })
    it(`Proceso de modificarRama Solamente se cambia el jefe opcional`, () => {
        const dao = new DAO();
        const controller = new Controller();
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        //--------------------------------------
        var nombre = '1';
        var idJefeNuevo1 = '1';
        var idJefeNuevo2 = '4';
        var idJefeViejo1 = '1';
        var idJefeViejo2 = '2';
        //----------------------------------------
        controller.modificarRama(dao, idMovimiento, idZona, idRama,nombre, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2 );
        expect(dao.listaBolean.length).toEqual(6);
    })
    
})