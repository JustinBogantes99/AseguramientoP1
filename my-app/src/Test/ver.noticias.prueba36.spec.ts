import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { FakeDao } from './DoblesPruebas/04-Fake/fake-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Ver noticias de un usuario - getNoticiaXMiembro    en DAO.js', () => {
    it(`Proceso de getNoticiaXMiembro  con los datos correctos`, () => {
        const dao = new FakeDao();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [{nombre:'Nuevo Gatito en adopción', contenido:'Encontré un nuevo gatito a las afueras de mi casa, si alguno lo quiere contactese conmigo',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1',idNoticia:'2'},{nombre:'Salvemos a Terri', contenido:'Terri necesita ayuda para su operacion',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1',idNoticia:'1'}])
        dao.addMiembros(miembro)
        var result = dao.getNoticiaXMiembro('1','12345678')
        expect(result?.length).toEqual(1);
    })
    it(`Proceso de getNoticiaXMiembro  No se encuentra noticias registradas`, () => {
        const dao = new FakeDao();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [])
        dao.addMiembros(miembro)
        var result = dao.getNoticiaXMiembro('1','12345678')
        expect(result?.length).toEqual(1);
    })
    
    it(`Proceso de getNoticiaXMiembro  El Id miembro incorrecto`, () => {
        const dao = new FakeDao();
        var miembro = new Miembro('12345678','Justin Bogantes Rodriguez', '64008137', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [{nombre:'Nuevo Gatito en adopción', contenido:'Encontré un nuevo gatito a las afueras de mi casa, si alguno lo quiere contactese conmigo',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1',idNoticia:'2'},{nombre:'Salvemos a Terri', contenido:'Terri necesita ayuda para su operacion',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1',idNoticia:'1'}])
        dao.addMiembros(miembro)
        var result = dao.getNoticiaXMiembro('1','123456789')
        expect(result?.length).toEqual(1);
    })    
})