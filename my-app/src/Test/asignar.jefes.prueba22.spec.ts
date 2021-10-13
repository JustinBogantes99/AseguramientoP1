import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';

describe('Asignar jefes de zonas y ramas - insertarJefeRama en DAO.js', () => {


  it(`Proceso de insertarJefeRama con datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';

    //Procesos de insertarGrupo
    dao.insertarJefeRama(cedulaMiembro, idZona, idRama, idMovimiento);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

  it(`Proceso de insertarJefeRama con idZona incorrecta`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = '402420840';
    var idZona = 'id incorrecto';
    var idRama = '1';

    //Procesos de insertarGrupo
    dao.insertarJefeRama(cedulaMiembro, idZona, idRama, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de insertarJefeRama con idRama incorrecta`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = 'id incorrecto';

    //Procesos de insertarGrupo
    dao.insertarJefeRama(cedulaMiembro, idZona, idRama, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de insertarJefeRama con idJefeNuevo incorrecta`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '87654321'; // cedula que no existe
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';

    //Procesos de insertarGrupo
    dao.insertarJefeRama(cedulaMiembro, idZona, idRama, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de insertarJefeRama con idMovimiento incorrecto`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = '123'; // id movimiento no existe
    var idZona = '1';
    var idRama = '1';

    //Procesos de insertarGrupo
    dao.insertarJefeRama(cedulaMiembro, idZona, idRama, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

});

