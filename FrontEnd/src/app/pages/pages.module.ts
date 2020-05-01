// Angular
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// Modules
import { SharedModule } from '../shared/shared.module';

// Rutas
import { PAGES_ROUTES } from './pages.routes';

// Pagination
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// datepicker
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


// Components
import { DashboardComponent } from './dashboard/dashboard.component';

import { UsuarioComponent } from './usuario/usuario.component';
import { PerfilComponent } from './perfil/perfil.component';
import { CrearQuejaComponent } from './crear-queja/crear-queja.component';
import { MisQuejasComponent } from './mis-quejas/mis-quejas.component';
import { CrearDenunciaComponent } from './crear-denuncia/crear-denuncia.component';
import { MisDenunciasComponent } from './mis-denuncias/mis-denuncias.component';
import { MapsComponent } from './maps/maps.component';
import { NewsComponent } from './news/news.component';
import { DepartmentComponent } from './department/department.component';
import { FuncionarioComponent } from './funcionario/funcionario.component';





@NgModule({
  declarations: [
    DashboardComponent,
    UsuarioComponent,
    PerfilComponent,
    CrearQuejaComponent,
    MisQuejasComponent,
    CrearDenunciaComponent,
    MisDenunciasComponent,
    MapsComponent,
    NewsComponent,
    DepartmentComponent,
    FuncionarioComponent,
    

  
   
   
  
  ],  
  imports: [
    CommonModule,
    NgbModule,
    PAGES_ROUTES,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    BsDatepickerModule.forRoot()
    
    
  ]
})
export class PagesModule { }
