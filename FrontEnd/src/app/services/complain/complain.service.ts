import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICE } from 'src/app/config/config';
import { ApiResponse, Department,Complain} from 'src/app/models/model.index';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ComplainService {

     
constructor(private http: HttpClient)
{
}


ListaDepartamentos() {
    let url = `${URL_SERVICE}/queja/lista`;

    return this.http.get( url)
    .pipe(
        map((resp: ApiResponse) => resp.result)
      );
  }


  ListaFuncionarios(depSeleccion:string) {
    let url = `${URL_SERVICE}/Funcionario/listaFuncionarios/${depSeleccion}`;

    return this.http.get( url)
    .pipe(
        map((resp: ApiResponse) => resp.result)
      );
  }


  allfuncionary() {
    let url = `${URL_SERVICE}/Funcionario/allfuncionary/`;

    return this.http.get( url)
    .pipe(
        map((resp: ApiResponse) => resp.result)
      );
  }



  GuardarQueja( queja:Complain) {

    let url = `${URL_SERVICE}/queja/GuardarQueja/${queja}`;

    return this.http.post( url,queja)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'insercion de queja', text: resp.message, type: 'success' }) )
      );

  }
  ListComplainsbyId(User_id:number) {
    let url = `${URL_SERVICE}/Complain/List/${User_id}`;

    return this.http.get( url)
    .pipe(
        map((resp: ApiResponse) => resp.result)
      );
  }


  UpdateComplain( complain:Complain) {

    let url = `${URL_SERVICE}/complain/Update/${complain}`;

    return this.http.post( url,complain)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Queja actualizada', text: resp.message, type: 'success' }) )
      );

  }
  DeleteComplain(Complain_id:number){

    let url = `${URL_SERVICE}/complain/delete/${Complain_id}`;

    return this.http.delete( url )
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Queja', text: resp.message, type: 'success' }))
      );

  
  }





}