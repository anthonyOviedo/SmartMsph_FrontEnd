import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/services/service.index';
import { Usuario } from 'src/app/models/model.index';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: []
})
export class HeaderComponent implements OnInit {

 
  usuario: Usuario;

  constructor(
    private usuarioService: UsuarioService
  ) { 
   // this.empresa = this.usuarioService.empresa;
    this.usuario = this.usuarioService.usuario;
  }

  ngOnInit() {
  }

  cerrarSesion() {
    this.usuarioService.logout();
  }

}
