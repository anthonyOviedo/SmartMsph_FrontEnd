import { Component, OnInit } from '@angular/core';
import { News} from 'src/app/models/model.index';
import {  NewService } from 'src/app/services/service.index';



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: []
})
export class DashboardComponent implements OnInit {
  Noticias: News[] = [];
  constructor( private _NewService: NewService ) { }

  ngOnInit() {
    
    this._NewService.ObtenerNoticias()
    .subscribe(result => {

      var Noticias = result.Noticias;
      this.Noticias = Noticias;
      console.log(this.Noticias);
     console.log  (new String(Noticias[0].fileToUpload));

    });

  }




}
