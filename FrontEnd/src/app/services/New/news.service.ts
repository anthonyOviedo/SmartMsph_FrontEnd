import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { URL_SERVICE } from 'src/app/config/config';
import { ApiResponse, News} from 'src/app/models/model.index';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class NewService {

     
constructor(private http: HttpClient)
{
}
// postFile(fileToUpload:File,titulo:string,descripcion:string)
// {
// const endpoint = 'http://localhost:44304/api'
// const formData : FormData = new FormData();
// formData.append('image',fileToUpload,fileToUpload.name);
// formData.append('titulo',titulo);
// formData.append('descripcion',descripcion);
// return this.http
// .post(endpoint,formData);

// }


postFile(Noticia:News) {

    let url = `${URL_SERVICE}/New/agregarNoticia/${Noticia}`;

    return this.http.post( url,Noticia)
      .pipe(
        map((resp: ApiResponse) => Swal.fire({ title: 'Noticia', text: resp.message, type: 'success' }) )
      );

  }

  
  ObtenerNoticias() {
  let url = `${URL_SERVICE}/New/ObtenerNoticias`;
  return this.http.get( url)
  .pipe(
      map((resp: ApiResponse) => resp.result)
    );
}

Delete(news_id:number){

  let url = `${URL_SERVICE}/news/delete/${news_id}`;

  return this.http.delete( url )
    .pipe(
      map((resp: ApiResponse) => Swal.fire({ title: 'Noticia', text: resp.message, type: 'success' }))
    );


}







}