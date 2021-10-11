import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';

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
    //Simulando al objeto DAO
    const dao = new DAO();
    const controller = new Controller();

    //Simulando variables que vienen por parametros
    var idMovimiento = '402420840';
    var idZona = '1';
    var idRama = '1';
    var idGrupo = '1';
    var nombre = 'Rescate de Perros Callejeros'
    var idEncargado1 = '1';
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

    expect(dao.wasSaved).toEqual(true);
    expect(controller.getMovement(0).gNodos.length).toEqual(1);
    expect(controller.getMovement(0).gMiembros.length).toEqual(1);
  });
});