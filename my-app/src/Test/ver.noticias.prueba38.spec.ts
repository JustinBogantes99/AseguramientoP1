import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';

describe('Ver noticias de un usuario - noticiaLeida en DAO.js', () => {


  it(`Proceso de noticiaLeida con datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idNoticia = '1';
    var idMiembro = '12345678';

    //Procesos de noticiaLeida
    dao.noticiaLeida(idNoticia, idMiembro);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

  it(`Proceso de noticiaLeida con idNoticia no registrado`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idNoticia = '2'; // noticia no existe
    var idMiembro = '12345678';

    //Procesos de noticiaLeida
    dao.noticiaLeida(idNoticia, idMiembro);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de noticiaLeida con idMiembro incorrecto`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idNoticia = '1';
    var idMiembro = '87654312'; // miembro no existe

    //Procesos de noticiaLeida
    dao.noticiaLeida(idNoticia, idMiembro);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

});

