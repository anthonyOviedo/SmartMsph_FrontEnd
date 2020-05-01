import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { URL_SERVICE } from 'src/app/config/config';
import { Usuario, Departamento, Persona, ApiResponse } from 'src/app/models/model.index';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  Departamento: Departamento;
  usuario: Usuario;
  token: string;
  Persona: Persona;

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.cargarStorage();
  }

  guardarStorage(token: string, usuario: Usuario, departamento: Departamento, persona: Persona) {
    localStorage.clear();
    let session = {
      token,
      usuario,
      departamento,
      persona
    };
    localStorage.setItem('conf', btoa(JSON.stringify(session)));
    this.usuario = usuario;
    this.token = token;
    this.Departamento = departamento;
    this.Persona = persona;
  }

  cargarStorage() {
    if (localStorage.getItem('conf')) {
      let session = JSON.parse(atob(localStorage.getItem('conf')));
      this.token = session.token;
      this.usuario = session.usuario;
      this.Departamento = session.departamento;
      this.Persona = session.persona;
    }
    else {
      this.token = '';
      this.usuario = null;
      this.Departamento = null;
      this.Persona = null;
    }
  }

  login(username: string, password: string = '') {

    let url = `${URL_SERVICE}/login/verify/${username}/${password}`;

    return this.http.post(url, null)
      .pipe(
        map((resp: ApiResponse) => this.guardarStorage(resp.result.token, resp.result.usuario, resp.result.usuario.departamento, resp.result.usuario.persona))
      );

  }

  signin(Usuario: Usuario) {

    let url = `${URL_SERVICE}/signin/registrarse`;

    return this.http.post(url, Usuario)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Registro exitoso', text: resp.message, type: 'success' }))
      );

  }

  logout() {

    this.usuario = null;
    this.Departamento = null;
    this.token = '';
    this.Persona = null;
    localStorage.removeItem('conf');

    this.router.navigate(['/login']);

  }

  isAuthenticated(): boolean {
    return this.token.length > 5 && this.usuario !== null;
  }

  headerAuthorization(): string {
    return `bearer ${this.token}`;
  }

  lista(pais: number, empresa: number, criterio: string) {

    if (criterio.trim() === '') {
      criterio = '_TODO_';
    }

    let url = `${URL_SERVICE}/usuario/lista/${pais}/${empresa}/${criterio}`;

    return this.http.get(url)
      .pipe(
        map((resp: ApiResponse) => resp.result)
      );

  }

  guardar(usuario: Usuario, nuevo: boolean) {

    let url = `${URL_SERVICE}/usuario/guardar/${nuevo}`;

    return this.http.post(url, usuario)
      .pipe(
        map((resp: ApiResponse) => {

          Swal.fire({ title: 'Usuario', text: resp.message, type: 'success' });

          if (usuario.usuario_Id === this.usuario.usuario_Id) {
            usuario.password = '';
            // this.guardarStorage( this.token, usuario, this.empresa );
          }

        })
      );

  }

  eliminar(usuario: Usuario) {

    let url = `${URL_SERVICE}/usuario/eliminar/${usuario.usuario_Id}`;

    return this.http.delete(url)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Usuario', text: resp.message, type: 'success' }))
      );

  }

  changePassword(usuario: Usuario, password: string) {

    let url = `${URL_SERVICE}/usuario/change-password/${password}`;

    return this.http.post(url, usuario)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Cambio de contraseña', text: resp.message, type: 'success' }))
      );

  }



  ListRole() {

    let url = `${URL_SERVICE}/usuario/roles`;

    return this.http.get(url)
      .pipe(
        map((resp: ApiResponse) => resp.result)
      );

  }

  AllUsers() {

    let url = `${URL_SERVICE}/usuario/admi`;

    return this.http.get(url)
      .pipe(
        map((resp: ApiResponse) => resp.result)
      );

  }

  DeleteUser(userid: number) {

    let url = `${URL_SERVICE}/user/delete/${userid}`;

    return this.http.delete(url)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'usuario', text: resp.message, type: 'success' }))
      );


  }







}
