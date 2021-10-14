import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Asignar jefes de zonas y ramas - modificarRama  en DAO.js', () => {
    it(`Proceso de modificarRama con los datos correctos`, () => {
        //Simulando la creación del DAO
        const dao = new DAO();

        //Variables que se pasan por parámetro
        var idMovimiento = '402420840';
        var idZona = '1';
        var idRama = '1';
        var nombre = '1';
        
        dao.modificarRama(idMovimiento, idZona, idRama, nombre)
        expect(dao.salvado()).toEqual(true);
    })

    it(`Proceso de modificarRama con un dato null`, () => {
        //Simulando la creación del DAO
        const dao = new DAO();

        //Variables que se pasan por parámetro
        var idMovimiento = null;     //Dato null
        var idZona = '1';
        var idRama = '1';
        var nombre = '1';
        
        dao.modificarRama(idMovimiento, idZona, idRama, nombre)

        expect(dao.salvado()).toEqual(false);
        expect(dao.error()).toEqual(true);
    })


})