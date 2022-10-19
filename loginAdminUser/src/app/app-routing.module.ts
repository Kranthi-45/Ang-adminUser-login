import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './services/auth.guard';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:"",component:LoginComponent},
  {path:"admin", canActivate:[AuthGuard], component:AdminComponent},
  {path:"user", canActivate:[AuthGuard], component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
