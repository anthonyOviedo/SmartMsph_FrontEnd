import { Component, OnInit } from '@angular/core';
import { CryptoService, UsuarioService, ComplainService } from 'src/app/services/service.index';
import { Usuario, Persona, Departamento, Role,Department } from 'src/app/models/model.index';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styles: []
})
export class FuncionarioComponent implements OnInit {

  ingresando: boolean = false;
  Usuario: Usuario;
  Persona: Persona;
  errormsj: string;
  passwordRegister: string = '';
  passwordLogin: string = '';
  departmens: Departamento[] = [];
  roles: Role[] = [];
  // users: Usuario[] = [];
  users: any;

  constructor(
    private _complainService: ComplainService,
    private _cryptoService: CryptoService,
    private _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    this.inicio();

    this._complainService.ListaDepartamentos()
      .subscribe(result => {
        var departmens = result.departamentos;
        this.departmens = departmens;
        console.log(this.departmens);

      });

    this._usuarioService.ListRole()
      .subscribe(result => {
        var roles = result.roles;
        this.roles = roles;
        console.log(this.roles);
      });
      this.ListaDeUsuarios();


  }

  ListaDeUsuarios(){
    this._usuarioService.AllUsers()
    .subscribe(result => {
      var users = result.users;
      this.users = users;
      console.log(this.users);
    });

  }

  inicio() {
    this.Persona = new Persona(-1, '', '', '', '', '');
    let departamento = new Department(-1, '', 0);
    this.Usuario = new Usuario(-1, '', -1, '', this.Persona, departamento);
    this.passwordRegister = '';
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
    if (this.Usuario.password == '')
      this.errormsj = 'Debe ingresar una contraseña';

    this.errormsj = '';

  }


  deleteUser(item:any){
    this._usuarioService.DeleteUser(item.usuario_Id)
    .subscribe(result => {
      this.ListaDeUsuarios();
      this.inicio();
    } );
  
  }




  registrarse() {
    this.validar();
    if (this.errormsj == '') {

     this.Persona.persona_Id = parseInt(this.Persona.strId);
      this.Usuario.password = this._cryptoService.encryptPassword(this.passwordRegister);
      this.Usuario.persona = this.Persona;
      console.log( this.Usuario);
      this._usuarioService.signin(this.Usuario)
      .subscribe(() => {
        this.ListaDeUsuarios();
        this.inicio();
      })
    }

  }


  
}