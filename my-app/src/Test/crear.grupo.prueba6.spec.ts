import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
//import { AppComponent } from '../app/app.component';
import { DAO } from './DoblesPruebas/03-Spy/spy-dao.spect';
import { Controller } from './DoblesPruebas/04-Fake/fake-controller.spect';
import { Miembro } from './DoblesPruebas/02-Stub/Stub-miembro.spect'
import {GestorNodos} from './DoblesPruebas/04-Fake/fake-gestorNodos.spect'
import { stubZona } from './DoblesPruebas/02-Stub/Stub-zona.spect'

describe('Crear Grupo - getGrupo en GestorNodos.js', () => {
    it(`Proceso de getGrupo con los datos correctos`, () => {
        const gestor = new GestorNodos();
        const zona = new stubZona();
        var rama=zona.getRama()
        gestor.addZona(zona)
        var Grupo=gestor.getGrupo('1', '1', '1')
        var result=1
        if(Grupo == null) {
            result=0
        }
        expect(result).toEqual(1);
    })
    it(`Proceso de getGrupo con los datos incorrectos`, () => {
        const gestor = new GestorNodos();
        const zona = new stubZona();
        var rama=zona.getRama()
        var idZona='1'
        var idRama='1'
        var idGrupo= ''
        gestor.addZona(zona)
        var Grupo=gestor.getGrupo(idZona,idRama,idGrupo)
        console.log('respuesta',Grupo)
        expect(gestor.wasError).toEqual(true);
    })
})