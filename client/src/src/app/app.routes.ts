import { Routes } from '@angular/router';
import {AppComponent} from './app.component';
import {HomeComponent} from './routes/pages/home/home.component';
import {UserComponent} from './routes/pages/user/user.component';
import {LoginComponent} from "./routes/authentification/login/login.component";
import {AdminGuard} from "./guards/admin/admin.guard";
import {GuestGuard} from "./guards/guest/guest.guard";
import {UserGuard} from "./guards/user/user.guard";
import {ProfileComponent} from "./routes/pages/profile/profile.component";
import {UnauthorizeComponent} from "./routes/error/403/unauthorize.component";
import {RegisterComponent} from "./routes/authentification/register/register.component";

export const ROUTES: Routes = [
  { path: '',      component: HomeComponent },
  { path: '403',  component: UnauthorizeComponent },
  { path: 'home',  component: HomeComponent },
  { path: 'user',  component: UserComponent, canActivate: [AdminGuard] },
  { path: 'login',  component: LoginComponent , canActivate: [GuestGuard]},
  { path: 'register',  component: RegisterComponent , canActivate: [GuestGuard]},
  { path: 'profile',  component: ProfileComponent, canActivate: [UserGuard] },
  { path: '**',    component: HomeComponent }
];
