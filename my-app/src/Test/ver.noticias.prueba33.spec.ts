import { FakeDao } from './DoblesPruebas/04-Fake/fake-dao.spect'
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Ver noticias de un usuario - getNoticiasXAsesor en DAO.js', () => {


    it(`Proceso de getNoticiasXAsesor con noticias dentro`, () => {
        //Simulando al objeto DAO 
        const dao = new FakeDao();
        
        //Simulando que existe un miembro dentro de la base de datos y que tiene una noticia nueva como asesor
        dao.addMiembros(new Miembro('12345678','Javier Barquero Gen', '84952633', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false,
        [{nombre:'Nuevo perrito en adopción', contenido:'Encontré un nuevo perrito a las afueras de mi casa, si alguno lo quiere contactese conmigo',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1'}]))

        var pullNoticias = dao.getNoticiasMiembro('12345678')

        expect(pullNoticias.length).toEqual(1);
        expect(pullNoticias[0].nombre).toEqual('Nuevo perrito en adopción');
    });

    it(`Proceso de getNoticiasXAsesor sin ninguna noticia dentro`, () => {
        //Simulando al objeto DAO 
        const dao = new FakeDao();
        
        //Simulando que existe un miembro dentro de la base de datos y que tiene una noticia nueva como asesor
        var miembro = new Miembro('12345678','Javier Barquero Gen', '84952633', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, [])
        dao.addMiembros(miembro)

        var pullNoticias = dao.getNoticiasMiembro('12345678')

        expect(pullNoticias.length).toEqual(0);
    });

    it(`Proceso de getNoticiasXAsesor con un idMiembro que no existe`, () => {
        //Simulando al objeto DAO 
        const dao = new FakeDao();
        
        //Simulando que existe un miembro dentro de la base de datos y que tiene una noticia nueva como asesor
        dao.addMiembros(new Miembro('12345678','Javier Barquero Gen', '84952633', 'ejemplo@gmail.com', 'San José', 'San José', 'Hospital', '', false, []))

        var pullNoticias = dao.getNoticiasMiembro('425896314')

        expect(pullNoticias).toEqual(null);
    });

});