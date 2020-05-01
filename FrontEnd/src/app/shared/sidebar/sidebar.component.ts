import { Component, OnInit } from '@angular/core';
import { Department, Persona } from 'src/app/models/model.index';
declare function init_sidebar();
declare var $: any;
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: []
})
export class SidebarComponent implements OnInit {

  Departments: Department[] = [];

  constructor() { }

  ngOnInit() {
    init_sidebar();
    this.Start();
  }

  Start() {
    this.loadDepartments();
  }

  loadDepartments() {


  }


openModal(){
  $('#OpcionModal').modal('show');
  console.log('entro')
}



}