import ReporteGeneralStrategy from "../Modelo/ReporteGeneralStrategy";
import ReporteTipadoStrategy from "../Modelo/ReporteTipadoStrategy";

//import DAO from './DAO'
export default class CentroNotificacionesPublicador{
//class CentroNotificacionesPublicador{
    constructor(pDao){
        this.dao = pDao;
        //this.reporteStrategy = pReporteStrategy;
    }

    async crearNoticia(idEmisor,tituloNoticia, detallesNoticia,idMovimiento, idZona, idRama, idGrupo,receptores,imagenes){
        //Falta imagen
        console.log(idEmisor,tituloNoticia, detallesNoticia,idMovimiento, idZona, idRama, idGrupo,receptores,imagenes)
        var resNoticia = await this.dao.crearNoticia(tituloNoticia,detallesNoticia, idEmisor, idMovimiento,idZona,idRama,idGrupo);
        //Luego aqui se pega la noticia a los receptores
        var idNoticia=resNoticia[0].crearnoticia;
        var idMiembros = [ ...receptores.keys() ];
        await this.dao.insertarNoticiaXMiembros(idNoticia,idMiembros,idMovimiento);
        this.actualizarNotificacionesMiembros(receptores,idNoticia);
        for(var i in imagenes){
            await this.dao.insertarImagenNoticia(idNoticia,imagenes[i])
        }
        return idNoticia;
    }
    
    async notificarReporte(tipo,idMovimiento){
        if(tipo=="General"){
            var reporte=new ReporteGeneralStrategy();
            return await reporte.reportar(idMovimiento);
        }else{
            var reporte=new ReporteTipadoStrategy();
            return await reporte.reportar(idMovimiento);
        }
    }

    async actualizarNotificacionesAsesor(Asesor, idNoticia){
        console.log(Asesor)
        await this.dao.insertarNoticiaAsesor(idNoticia, Asesor.id);
        Asesor.noticias.push(idNoticia);
    }

    actualizarNotificacionesMiembros(miembros,idNoticia){
        miembros.forEach(function(value, key){
            value.noticias.push(idNoticia);
        })
    }

    async obtenerNoticias(idMiembro,idMovimiento){
        //Query para obtener las noticias del miembro
        return await this.dao.noticiaRecibidasMiembro(idMiembro,idMovimiento)
    }

    async obtenerNoticiasPublicadas(pIdMovimiento,pIdMiembro){
        return await this.dao.noticiasMiembro(pIdMovimiento,pIdMiembro)
    }
}

//var centro=new CentroNotificacionesPublicador(new DAO());
//centro.crearNoticia('117940925',"TITULO","DETALLES",'4000042145',1,1,123,"")