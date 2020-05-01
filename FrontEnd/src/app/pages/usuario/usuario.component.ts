import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from 'src/app/models/model.index';
import { UsuarioService, CryptoService, MessageService } from 'src/app/services/service.index';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  // departamento: any;
  // usuario_Id: string;

  // // Lista
  // criterio: string = '';
  // cantidad: number = 0;
  // usuarios: Usuario[] = [];

  // // Mantenimiento
  // title: string = 'Registrar usuario';
  // usuario: Usuario;
  // txtUsuario: HTMLInputElement;
  // txtPassword: HTMLInputElement;
  // guardando: boolean = false;
  // newUser: boolean = true;

  // // Pagination
  // page: number = 1;
  // pageSize: number = 10;

  // constructor(
  //   private usuarioService: UsuarioService,
  //   private cryptoService: CryptoService,
  //   private messageService: MessageService
  // ) { 
  //   this.departamento = this.usuarioService.Departamento;
  //   this.usuario_Id = this.usuarioService.usuario.usuario_Id;
  // }

  ngOnInit() {
 
  }

  // nuevo() {

  //   this.newUser = true;
  //   this.title = 'Registrar usuario';
  //   this.txtUsuario.readOnly = false;
  //   this.txtPassword.readOnly = false;

  //   // this.usuario = new Usuario (
  //   //   '',
  //   //   '',
  //   //   '',
  //   //   true
  //   // );

  // }

  // limpiaCriterio() {
  //   this.criterio = '';
  //   this.cargarUsuarios();
  // }

  // // cargarUsuarios() {

  // //   this.usuarioService.lista( this.empresa.pais_Id, this.empresa.emp_Id, this.criterio )
  // //     .subscribe(result => {
  // //       this.cantidad = result.cantidad;
  // //       this.usuarios = result.usuarios;
  // //     });

  // // }

  // cargarUsuario( usuario: Usuario ) {

  //   this.newUser = false;
  //   this.title = 'Actualizar usuario';
  //   this.usuario = Object.assign({}, usuario);
  //   this.usuario.password = '123456';
  //   this.txtUsuario.readOnly = true;
  //   this.txtPassword.readOnly = true;

  //   $('html, body').animate({
  //     scrollTop: $('#titulo').offset().top
  //   }, 1300);

  // }

  // guardar( form: NgForm ) {

  //   if ( form.invalid ) {
  //     return;
  //   }

  //   this.guardando = true;

  //   let user: Usuario = Object.assign({}, this.usuario);

 

  //   user.password = this.cryptoService.encryptPassword( this.usuario.password );

  //   this.usuarioService.guardar( user, this.newUser )
  //     .subscribe(() => {
  //       this.cargarUsuarios();
  //       this.nuevo();
  //     })
  //     .add(() => this.guardando = false);

  // }

  // eliminar( usuario: Usuario ) {

  //   if ( usuario.usuario_Id === this.usuario_Id ) {
  //     this.messageService.showError('No puede eliminar su propio usuario');
  //     return;
  //   }


  //   this.messageService.showAlertQuestion( 
  //     'Eliminar usuario',
  //     '¿Seguro(a) que desea eliminar al usuario ' + usuario.nombre + '?'  
  //   ).then(result => {

  //     if (result.value) {        
  //       this.usuarioService.eliminar( usuario )
  //         .subscribe( () => this.cargarUsuarios() );
  //     }

  //   });

  // }

}
