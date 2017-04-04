import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginEstudianteService } from './../../services/login-estudiante.service';
import { FacultadesService } from './../../services/facultades.service';

@Component({
    moduleId: module.id,
    selector: 'app-pulicar-convocatoria',
    templateUrl: 'publicar-convocatoria.component.html'
})

export class PublicarConvocatoriaComponent implements OnInit {

    datos_usuario = {};
    facultades = [];

    constructor(
        private loginEstudianteService: LoginEstudianteService,
        private facultadesService: FacultadesService,
        private router: Router
    ) { }

    ngOnInit() { 
        this.datos_usuario = this.loginEstudianteService.getDatosUsuario();
        this.facultades = this.facultadesService.getDatosFacultades();
    }
    //Array del tipo de Subsidios
    subsidios =[
        {
            "n_tiposubsidio": "Total",
            "t_porcentajesub":"100",
            "cupos": null
        },
         {
            "n_tiposubsidio": "Tipo A",
            "t_porcentajesub":"70",
            "cupos": null
        },
         {
            "n_tiposubsidio": "Tipo B",
            "t_porcentajesub":"40",
            "cupos": null
        }
    ];

    facultad="";
    fechaInicio="";
    fechaFin="";

    regresar(){
        this.router.navigate(['/landing']);
    }

    enviardatos(){
        console.log("AQUI SE ENVIAN LOS DATOS PARA LA BD");
    }


}