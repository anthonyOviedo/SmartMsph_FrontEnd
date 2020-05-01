import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { CryptoService, UsuarioService } from '../services/service.index';
import { Usuario, Persona, Departamento, Department } from 'src/app/models/model.index';
declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {

  ingresando: boolean = false;
  Usuario: Usuario;
  Persona: Persona;
  errormsj: string;
  passwordRegister:string='';
  passwordLogin:string= '';
  constructor(
    private router: Router,
    private _cryptoService: CryptoService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.inicio();
  }

  ingresar(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.ingresando = true;

    var user = form.value.username;
    var pass = this._cryptoService.encryptPassword(form.value.password);

    this._usuarioService.login(user, pass)
      .subscribe(() => this.router.navigate(['/dashboard']))
      .add(() => this.ingresando = false);

  }

  inicio() {
    this.Persona = new Persona(-1, '', '', '', '', '');
    let departamento = new Department(-1, '', 0);
    this.Usuario = new Usuario(-1,'', -1, '', this.Persona, departamento);
    this.passwordRegister ='';
    this.passwordLogin = '';
  }

  validar() {
    if (this.Persona.nombre == '')
      this.errormsj = 'Debe ingresar su nombre';

    if (this.Persona.apellido1 == '')
      this.errormsj = 'Debe ingresar su primer apellido';

    if (this.Persona.apellido2 == '')
      this.errormsj = 'Debe ingresar su segundo apellido';

    if (this.Persona.correo == '')
      this.errormsj = 'Debe ingresar un correo';

    if (this.Persona.persona_Id == -1)
      this.errormsj = 'Debe el numero de cedula';

    if (this.Usuario.nombre == '')
      this.errormsj = 'Debe ingresar su nombre de usuario';
      if(this.Usuario.password == '')
      this.errormsj = 'Debe ingresar una contraseña';
  
    this.errormsj='';  
    }

    registrarse(){
      this.validar();
      if(this.errormsj==''){
        
       
        this.Persona.persona_Id = parseInt(this.Persona.strId);
        //cambio aqui
        this.Usuario.departamento.department_id=4;
       
       
        this.Usuario.password = this._cryptoService.encryptPassword(this.passwordRegister);
        this.Usuario.rol = 3; 
        this.Usuario.persona=this.Persona;
        console.log(this.Usuario);
        this._usuarioService.signin( this.Usuario )
        .subscribe(() => {
          $("#Register").modal('hide');
          this.inicio();
        })
      }


    }


}
