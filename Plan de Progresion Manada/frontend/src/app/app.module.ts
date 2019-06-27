import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import{RouterModule} from '@angular/router';
// Components
import { AppComponent } from './app.component';
import { EmployeeComponent } from './components/employees/employees.component';
import { Employees2Component } from './components/employees2/employees2.component';
import{AppRoutingModule} from '../app/app-routing-module';
import { UserComponent } from './components/user/user.component';
import { SignUpComponent } from './components/user/sign-up/sign-up.component'
import{appRoutes} from './routes'
  import { from } from 'rxjs';
import { SignInComponent } from './components/user/sign-in/sign-in.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import{ AuthGuard}from './auth/auth.guard';
import { UserService } from './services/user.service';
import { AuthInterceptor } from './auth/auth.interceptor';
import { SolicitarInsigniaComponent } from './components/solicitar-insignia/solicitar-insignia.component';



@NgModule({
  declarations: [
    AppComponent,
    EmployeeComponent,
    Employees2Component,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    UserProfileComponent,
    SolicitarInsigniaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  },AuthGuard,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }