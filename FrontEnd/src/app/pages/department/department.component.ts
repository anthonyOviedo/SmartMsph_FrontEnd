import { Component, OnInit } from '@angular/core';
import { ComplainService } from 'src/app/services/service.index';
import { Department, Funcionario } from 'src/app/models/model.index';
import Swal from 'sweetalert2';
import { DepartmentService } from 'src/app/services/department/department.service';

declare var $: any;

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styles: []
})
export class DepartmentComponent implements OnInit {

   // Pagination
   page: number = 1;
   pageSize: number = 5;

  funcionarios: Funcionario[] = [];
  department: Department;
  Funcio: Funcionario;
  departmens: Department[] = [];
  constructor(
    private _complainService: ComplainService,
    private DeparmetService: DepartmentService
  ) { }

  ngOnInit() {
    this.inicio();
    this.list();
  }

  buscarEmployee() {
    this._complainService.allfuncionary()
      .subscribe(result => {
        var funcionarios = result.funcionarios;
        this.funcionarios = funcionarios;
        $('#funcionarioSearch').modal('show');
      })

  }

  inicio() {

    this.department = new Department(-1, '', -1);
    this.Funcio = new Funcionario('', '', '', -1);
  }

  validar(department: Department) {
    if (department.name == '')
      return 'Debe ingresar el nombre del departamento'
    if (department.person_id == -1)
      return 'Debe ingresar el encargado del departamento'
    return '';


  }

  enviar() {
    this.department.person_id = this.Funcio.Person_Id
    let mensaje = this.validar(this.department);

    if (mensaje != '') {
      Swal.fire('Error', mensaje, 'error');
    } else {
      this.DeparmetService.Guardar(this.department)
        .subscribe(() => {
          this.list();
          this.inicio();
        })
        .add();

    }



  }

  delete(item: any) {
  
    
    this.DeparmetService.DeleteDenounce(item.department_Id)
      .subscribe(result => {
        this.list();
      });
  }

  list() {
    this._complainService.ListaDepartamentos()
      .subscribe(result => {
        console.log(result);
        
        var departmens = result.departamentos;
        this.departmens = departmens;

      })
  }
  agregarFuncionario(item: Funcionario) {

    this.Funcio = item;

    $('#funcionarioSearch').modal('toggle');
  }

  EditDepartment(item:any){
    this.department = Object.assign({},item);
    this.Funcio.Person_Id = this.department.person_id;
    this.Funcio.nombre = item.personname;
  }



}
