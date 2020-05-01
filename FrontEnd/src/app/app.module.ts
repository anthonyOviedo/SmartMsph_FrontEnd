// Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { AgmCoreModule } from '@agm/core';

// Routes
import { APP_ROUTES } from './app.routes';

// Modules
import { ServiceModule } from './services/service.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



// Components 
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PagesComponent } from './pages/pages.component';

// Services
import { NewService,UsuarioService, HttphInterceptorService } from './services/service.index';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    APP_ROUTES,
    FormsModule,
    ReactiveFormsModule,
    ServiceModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDIQgM7CaCAgAE2Ba72igtACz6iIrH8Qk8'
    })
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttphInterceptorService,
      multi: true,
      deps: [ UsuarioService ]
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
