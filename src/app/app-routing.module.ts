import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthenticationGuard } from './guards/authentication.guard';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ContactListComponent } from './components/contact-list/contact-list.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'about', component: AboutComponent, canActivate: [AuthenticationGuard] },
  { path: 'contacts', component: ContactListComponent, canActivate: [AuthenticationGuard] },
  { path: 'contacts/:id', component: ContactDetailComponent, canActivate: [AuthenticationGuard]},
  { path: '**', pathMatch: 'full', component: NotFoundComponent, canActivate: [AuthenticationGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponent = [
  LoginComponent,
  RegisterComponent,
  ContactListComponent
];
