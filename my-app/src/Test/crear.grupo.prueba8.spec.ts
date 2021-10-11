import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';

describe('Crear Grupo - insertarGrupo en DAO.js', () => {


  it(`Proceso de insertarGrupo con datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros'
    var idEncargado1 = '12345678';
    var idEncargado2 = null;
    var isMonitor = true;

    //Procesos de insertarGrupo
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);

    expect(dao.salvado()).toEqual(true);
  });

  it(`Proceso de insertarGrupo con datos correctos e idEncargado2`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros'
    var idEncargado1 = '12345678';
    var idEncargado2 = '87654321';
    var isMonitor = true;

    //Procesos de insertarGrupo
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);

    expect(dao.salvado()).toEqual(true);
  });

  it(`Proceso de insertarGrupo con un dato incorrecto`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = null;                //Se deja el id del Grupo como null
    var nombre = null
    var idEncargado1 = '1111111111';  //Se introduce un id de un miembro que no existe
    var idEncargado2 = null;
    var isMonitor = true;

    //Procesos de insertarGrupo
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);

    expect(dao.salvado()).toEqual(false);
  });


});

