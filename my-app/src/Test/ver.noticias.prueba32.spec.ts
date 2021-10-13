import { FakeDao } from './DoblesPruebas/04-Fake/fake-dao.spect'

describe('Ver noticias de un usuario - getNoticias en DAO.js', () => {


    it(`Proceso de getNoticias con datos dentro`, () => {
        //Simulando al objeto DAO 
        const dao = new FakeDao();
        
        //Simulando que existe una noticia en la base de datos
        dao.addNoticias({nombre:'Nuevo perrito en adopción', contenido:'Encontré un nuevo perrito a las afueras de mi casa, si alguno lo quiere contactese conmigo',
        idMiembro:'12345678', idMovimiento:'402420840', idZona:'1', idRama:'1', idGrupo:'1'})

        expect(dao.getNoticias().length).toEqual(1);
        expect(dao.getNoticias()[0].idMovimiento).toEqual('402420840');
    });

    it(`Proceso de getNoticias sin datos dentro`, () => {
        //Simulando al objeto DAO 
        const dao = new FakeDao();
        
        //No hay noticias en la lista del FakeDao, simulando que no hay noticias
        

        expect(dao.getNoticias().length).toEqual(0);
    });

    });
  
  