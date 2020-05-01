import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/model.index';
import { UsuarioService, CryptoService, MessageService } from 'src/app/services/service.index';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styles: []
})
export class PerfilComponent implements OnInit {

  usuario: Usuario;
  guardando: boolean;

  constructor(
    private usuarioService: UsuarioService,
    private cryptoService: CryptoService,
    private messageService: MessageService
  ) { 
    this.usuario = this.usuarioService.usuario;
    this.guardando = false;
  }

  ngOnInit() {
  }

  guardar( form: NgForm ) {

    if ( form.invalid ) {
      return;
    }

    this.guardando = true;

    this.usuarioService.guardar( this.usuario, false )
      .subscribe()
      .add( () => this.guardando = false );

  }

  actualizaPassword( form: NgForm ) {

    if ( form.invalid ) {
      return;
    }

    let pass = this.cryptoService.encryptPassword( form.value.password );
    let passNew = this.cryptoService.encryptPassword( form.value.passwordNew );
    let passConfirm = this.cryptoService.encryptPassword( form.value.passwordConfirm );

    if ( passNew !== passConfirm ) {
      this.messageService.showError( 'La confirmación de la nueva contraseña no coincide' );
      return;
    }

    this.guardando = true;

    let user: Usuario = new Usuario(
      this.usuario.usuario_Id,
      '',this.usuario.rol,
      pass,this.usuario.persona,this.usuario.departamento
    );

    this.usuarioService.changePassword( user, passNew )
      .subscribe( () => form.reset() )
      .add( () => this.guardando = false );

  }

}
