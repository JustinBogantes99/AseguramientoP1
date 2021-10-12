import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'

describe('Crear Grupo - agregarGrupo en Controlador.js', () => {
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

  it(`Proceso de agregarGrupo con los datos correctos`, () => {
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

    //Se corre el agregarGrupo de controller
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);

    expect(controller.getMovement(0).gNodos.length).toEqual(1);
  });

  it(`Proceso de agregarGrupo con formato inválido`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = 402420840;                   //Se pone el idMovimiento como número en vez de String
    var idZona = '1';
    var idRama = '1';
    var idGrupo = null;                             //Se pone el idGrupo como null
    var nombre = 'Rescate de Perros Callejeros'     
    var idEncargado1 = '12345678';
    var idEncargado2 = null;
    var isMonitor = true;

    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    expect(controller.getMovement(0).gNodos.length).toEqual(0);
  });

  it(`Proceso de agregarGrupo con datos ya ingresados`, () => {
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

    //Se ingresa el grupo dos veces, con la esperanza que no inserte el segundo que es un error
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);

    expect(controller.getMovement(0).gNodos.length).toEqual(1);
  });

  it(`Proceso de agregarGrupo con idMovimiento no existente`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '303010541';             //Se pone un idMovimiento que no existe
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros'
    var idEncargado1 = '12345678';
    var idEncargado2 = null;
    var isMonitor = true;

    //Se corre el agregarGrupo de controller, esperando que no ingrese el grupo ya que el idMovimiento no es correcto
    controller.agregarGrupo(idMovimiento, idZona, idRama, idGrupo, nombre, isMonitor, idEncargado1, idEncargado2);

    expect(controller.getMovement(0).gNodos.length).toEqual(0);
  });
});