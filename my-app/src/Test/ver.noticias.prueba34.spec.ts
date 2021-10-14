import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { FakeDao } from './DoblesPruebas/04-Fake/fake-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Ver noticias de un usuario - getNoticiaMiembro en DAO.js', () => {
    it(`Proceso de getNoticiaMiembro con los datos correctos`, () => {
        const dao = new FakeDao();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [{nombre:'Nuevo Gatito en adopción', contenido:'Encontré un nuevo gatito a las afueras de mi casa, si alguno lo quiere contactese conmigo',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1'},{nombre:'Salvemos a Terri', contenido:'Terri necesita ayuda para su operacion',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1'}])
        dao.addMiembros(miembro)
        var result = dao.getNoticiasMiembro('12345678')
        expect(result.length).toEqual(2);
    })
    it(`Proceso de getNoticiaMiembro No se encuentra noticias registradas`, () => {
        const dao = new FakeDao();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [])
        dao.addMiembros(miembro)
        var result = dao.getNoticiasMiembro('12345678')
        expect(result.length).toEqual(0);
    })
    it(`Proceso de getNoticiaMiembro El Id miembro incorrecto`, () => {
        const dao = new FakeDao();
        const controller = new Controller();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [])
        dao.addMiembros(miembro)
        var result = dao.getNoticiasMiembro('123456789')
        expect(result.length).toEqual(0);
    })  
})