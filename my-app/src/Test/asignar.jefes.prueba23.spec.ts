import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';

describe('Asignar jefes de zonas y ramas - asignarJefeZona en DAO.js', () => {


  it(`Proceso de asignarJefeZona con datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = '402420840';
    var idZona = '1';

    //Procesos de insertarGrupo
    dao.asignarJefeZona(cedulaMiembro, idZona, idMovimiento);

    expect(dao.salvado()).toEqual(true);
    expect(dao.error()).toEqual(false);
  });

    it(`Proceso de asignarJefeZona con idZona incorrecta`, () => {
      //Simulando al objeto DAO y Controller
      const dao = new DAO();
  
      //Simulando variables que vienen por parametros
      var cedulaMiembro = '12345678';
      var idMovimiento = '402420840';
      var idZona = 'id inválido';
  
      //Procesos de insertarGrupo
      dao.asignarJefeZona(cedulaMiembro, idZona, idMovimiento);
  
      expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
    });

  it(`Proceso de asignarJefeZona con idMovimiento incorrecto`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '12345678';
    var idMovimiento = 'movimiento inválido';
    var idZona = '1';

    //Procesos de insertarGrupo
    dao.asignarJefeZona(cedulaMiembro, idZona, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
  });

  it(`Proceso de asignarJefeZona con idJefeNuevo incorrecta`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();

    //Simulando variables que vienen por parametros
    var cedulaMiembro = '87654321';
    var idMovimiento = '402420840';
    var idZona = '1';

    //Procesos de insertarGrupo
    dao.asignarJefeZona(cedulaMiembro, idZona, idMovimiento);

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);

    });
    it(`Proceso de asignarJefeZona con idJefeNuevo de otra zona`, () => {
      //Simulando al objeto DAO y Controller
      const dao = new DAO();

      //Simulando variables que vienen por parametros
      var cedulaMiembro = '1111111';
      var idMovimiento = '402420840';
      var idZona = '1';

      //Procesos de insertarGrupo
      dao.asignarJefeZona(cedulaMiembro, idZona, idMovimiento);

      expect(dao.salvado()).toEqual(false);
      expect(dao.error()).toEqual(true);
    });
});

