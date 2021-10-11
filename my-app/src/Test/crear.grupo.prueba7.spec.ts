import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';

describe('Crear Grupo - getMovimientos en Controlador.js', () => {


  it(`Proceso de getMovimientos con movimiento válido`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';


    //Procesos de getMovimiento
    var m = controller.getMovimiento(idMovimiento);

    expect(m).not.toBeNull();
    expect(m).not.toBeUndefined();

  });

  it(`Proceso de getMovimientos con movimiento no válido`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = 'código inválido';


    //Procesos de getMovimiento
    var m = controller.getMovimiento(idMovimiento);

    expect(m).toBeNull();
    expect(m).not.toBeUndefined();

  });

  it(`Proceso de getMovimientos con id vacío`, () => {
    //Simulando al objeto DAO y Controller
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '';


    //Procesos de getMovimiento
    var m = controller.getMovimiento(idMovimiento);

    expect(m).toBeNull();
    expect(m).not.toBeUndefined();

  });


});

