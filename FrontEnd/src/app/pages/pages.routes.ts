import { Routes, RouterModule } from "@angular/router";

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


const pagesRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Noticias', submenu: '' } },
    
    { path: 'usuario', component: UsuarioComponent, data: { titulo: 'Usuarios', submenu: 'Catálogos' } },
    { path: 'perfil', component: PerfilComponent, data: { titulo: 'Perfil', submenu: '' } },  
    { path: 'crearQueja', component: CrearQuejaComponent, data: { titulo: 'Crear Queja', submenu: 'Quejas' } },
    { path: 'misQuejas', component: MisQuejasComponent, data: { titulo: 'Mis Quejas', submenu: 'Quejas' } },
    { path: 'crearDenuncias', component: CrearDenunciaComponent, data: { titulo: 'Crear Denuncia', submenu: 'Denuncias' } },
    { path: 'misDenuncias', component: MisDenunciasComponent, data: { titulo: 'Mis Denuncias', submenu: 'Denuncias' } },
    { path: 'mapas', component: MapsComponent, data: { titulo: 'Mis Denuncias', submenu: 'Denuncias' } },
    { path: 'news', component: NewsComponent, data: { titulo: 'Crear noticia', submenu: 'Mantenimientos' } },
    { path: 'funcionario', component: FuncionarioComponent, data: { titulo: 'Crear Funcionario', submenu: 'Mantenimientos' } },
    { path: 'Departamentos', component: DepartmentComponent, data: { titulo: 'Crear Departameto', submenu: 'Mantenimientos' } },
    
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);