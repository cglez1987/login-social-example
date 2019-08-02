import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SingupComponent } from './singup/singup.component';
import { AuthGuard } from './_guards/auth.guard';
import { Oauth2Component } from './oauth2/oauth2.component';
import { UserResolveService } from './user/user-resolver.service';

const routes: Routes = [
  { path: "", component: LoginComponent },
  { path: "login", component: LoginComponent },
  { path: "oauth2/redirect", component: Oauth2Component },
  { path: "signup", component: SingupComponent },
  { path: "home", component: HomeComponent, resolve: { user: UserResolveService } }
  //{ path: "admin/especialidades", component: EspecialidadListComponent, canActivate: [AuthGuard] }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [UserResolveService]
})
export class AppRoutingModule { }
