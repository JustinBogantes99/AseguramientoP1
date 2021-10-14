import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Crear Grupo - CrearGrupoNuevo en Controlador.js', () => {
  /*Ejemplo de beforeEach, por si lo necesitan para alguna cosa e.e

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });*/

  it(`Proceso de CrearGrupoNuevo con los datos correctos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros'
    var idEncargado1 = '12345678';
    var idEncargado2 = null;
    var isMonitor = true;

    //Procesos de CrearGrupoNuevo
    if(!nombre){
        nombre = idZona+idRama+idGrupo;
    }
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado1);
    if(idEncargado2){
        controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado2);
    }
    
    expect(dao.salvado()).toEqual(true);
    expect(controller.getMovement(0).gNodos.length).toEqual(1);
    expect(controller.getMovement(0).gNodos[0].miembros.length).toEqual(1);
  });

  it(`Proceso de CrearGrupoNuevo sin nombre por parámetro`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = null
    var idEncargado1 = '12345678';
    var idEncargado2 = null;
    var isMonitor = true;

    //Procesos de CrearGrupoNuevo
    if(!nombre){
        nombre = idZona+idRama+idGrupo;
    }
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado1);
    if(idEncargado2){
        controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado2);
    }

    expect(dao.salvado()).toEqual(true);
    expect(controller.getMovement(0).gNodos.length).toEqual(1);
    expect(controller.getMovement(0).gNodos[0].nombre).toEqual('111');
    expect(controller.getMovement(0).gNodos[0].miembros.length).toEqual(1);
  });

  it(`Proceso de CrearGrupoNuevo con Encargado2`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Se simula que hay otro miembro en el movimiento para asignar un segundo encargado
    controller.agregarMiembro(0, new Miembro('502369874','Zacarias Piedras del Río', '89895946', 'ejemplo2@hotmail.com', 'San José', 'San José', 'Pavas', '', false,[]))

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros';
    var idEncargado1 = '12345678';
    var idEncargado2 = '502369874';
    var isMonitor = true;

    //Procesos de CrearGrupoNuevo
    if(!nombre){
        nombre = idZona+idRama+idGrupo;
    }
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado1);
    if(idEncargado2){
        controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado2);
    }

    expect(dao.salvado()).toEqual(true);
    expect(controller.getMovement(0).gNodos.length).toEqual(1);
    expect(controller.getMovement(0).gNodos[0].miembros.length).toEqual(2);
    expect(controller.getMovement(0).gNodos[0].miembros[1].getid()).toEqual('502369874');
  });

  it(`Proceso de CrearGrupoNuevo con Datos incorrectos`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = null;                //Se deja el id del Grupo como null
    var nombre = null
    var idEncargado1 = '1111111111';  //Se introduce un id de un miembro que no existe
    var idEncargado2 = null;
    var isMonitor = true;

    //Procesos de CrearGrupoNuevo
    if(!nombre){
        nombre = idZona+idRama+idGrupo;
    }
    dao.insertarGrupo(idMovimiento, idZona, idRama, idGrupo, isMonitor, nombre, idEncargado1, idEncargado2);
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado1);
    if(idEncargado2){
        controller.agregarMiembroGrupo(idMovimiento, idZona, idRama, idGrupo, idEncargado2);
    }

    expect(dao.salvado()).toEqual(false);
    expect(dao.error()).toEqual(true);
    expect(controller.getMovement(0).gNodos.length).toEqual(0);
  });

});