import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';

describe('Ver noticias de un usuario - noticiasMiembro en DAO.js', () => {


  it(`Proceso de noticiasMiembro con datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idMiembro = '12345678';

    //Procesos de insertarGrupo
    dao.noticiasMiembro(idMovimiento, idMiembro);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

  it(`Proceso de noticiasMiembro sin noticias registradas`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idMiembro = '12345678';

    //Procesos de insertarGrupo
    dao.noticiasMiembro(idMovimiento, idMiembro);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

  it(`Proceso de noticiasMiembro con idMiembro incorrecto`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idMiembro = '87654312'; // miembro no existe

    //Procesos de insertarGrupo
    dao.noticiasMiembro(idMovimiento, idMiembro);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de noticiasMiembro con idMiembro sin noticias registradas`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idMiembro = '12345678';

    //Procesos de insertarGrupo
    dao.noticiasMiembro(idMovimiento, idMiembro);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

});

