import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { FormPageComponent } from './form-page/form-page.component';
import { AuthGuard } from './auth-guard.guard';
import { RoleGuard } from './role-guard.guard';
import { DeactivateGuard } from './deactivate-guard.guard';
import { LoadGuard } from './load-guard.guard';
import { ResolveGuard } from './resolve-guard.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent }, // Public Route
  {
    path: 'user-dashboard',
    component: UserDashboardComponent,
    canActivate: [AuthGuard], // Ensures only authenticated users can access
    canLoad: [LoadGuard],     // Ensures only admins can load the route
    resolve: { dashboardMessage: ResolveGuard }, // Prefetches data for User Dashboard
  },
  {
    path: 'admin-dashboard',
    component: AdminDashboardComponent,
    canActivate: [AuthGuard, RoleGuard], // Ensures user is authenticated and has admin privileges
    canLoad: [LoadGuard], // Ensures admin dashboard is only loaded for authorized users
  },
  {
    path: 'form',
    component: FormPageComponent,
    canDeactivate: [DeactivateGuard], // Prompts user before navigating away if the form is dirty
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Default Route
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
