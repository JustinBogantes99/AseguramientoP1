import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';

describe('Asignar jefes de zonas y ramas - modificarZona  en Controlador.js', () => {
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

    it(`Proceso de modificarZona con los datos correctos`, () => {
        //Simulando al objeto DAO y Controller
        const dao = new DAO();
        const controller = new Controller();

        //Simulando variables que vienen por parametros
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombreZona = 'Cartago'
        var idJefeNuevo1 = '12345678';
        var idJefeNuevo2 = '24365745';
        var idJefeViejo1 = '12143265';
        var idJefeViejo2 = '42365145';


        //Procesos de modificarZona
        controller.modificarZona(dao, idMovimiento, idZona, nombreZona, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2);

        expect(dao.getSalvados().length).toEqual(5);
    });

    it(`Proceso de modificarZona con idJefeViejo1 igual a idJefeNuevo1`, () => {
        //Simulando al objeto DAO y Controller
        const dao = new DAO();
        const controller = new Controller();

        //Simulando variables que vienen por parametros
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombreZona = 'Cartago'
        var idJefeNuevo1 = '12345678';
        var idJefeNuevo2 = '24365745';
        var idJefeViejo1 = '12345678';
        var idJefeViejo2 = '42365145';


        //Procesos de modificarZona
        controller.modificarZona(dao, idMovimiento, idZona, nombreZona, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2);

        expect(dao.getSalvados().length).toEqual(3);
    });

    it(`Proceso de modificarZona con el idJefeViejo1 no existe`, () => {
        //Simulando al objeto DAO y Controller
        const dao = new DAO();
        const controller = new Controller();

        //Simulando variables que vienen por parametros
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombreZona = 'Cartago'
        var idJefeNuevo1 = '00000000'; //IdJefeViejo ya no existe
        var idJefeNuevo2 = '24365745';
        var idJefeViejo1 = '12345678';
        var idJefeViejo2 = '42365145';


        //Procesos de modificarZona
        controller.modificarZona(dao, idMovimiento, idZona, nombreZona, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2);


        expect(dao.getSalvados().length).toEqual(5);
    });

    it(`Proceso de modificarZona con el nombre de la zona es igual`, () => {
        //Simulando al objeto DAO y Controller
        const dao = new DAO();
        const controller = new Controller();

        //Simulando variables que vienen por parametros
        var idMovimiento = '402420840';
        var idZona = '1';
        var nombreZona = 'San José'     //Nombre de la zona es igual al Stub-Zona
        var idJefeNuevo1 = '12345678'; 
        var idJefeNuevo2 = '24365745';
        var idJefeViejo1 = '12143265';
        var idJefeViejo2 = '42365145';


        //Procesos de modificarZona
        controller.modificarZona(dao, idMovimiento, idZona, nombreZona, idJefeNuevo1, idJefeNuevo2, idJefeViejo1, idJefeViejo2);


        expect(dao.getSalvados().length).toEqual(4);
    });
});