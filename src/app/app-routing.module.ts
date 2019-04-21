import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';
import { PostListComponent } from './components/posts/post-list/post-list.component';
import { PostCreateComponent } from './components/posts/post-create/post-create.component';
import { PostEditComponent } from './components/posts/post-edit/post-edit.component';
import { PostDetailsComponent } from './components/posts/post-details/post-details.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/home' },
  { path: 'home' ,component:HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'posts', component: PostListComponent, canActivate: [AuthGuard], },
  { path: 'posts/user', component: PostListComponent, canActivate: [AuthGuard], },
  { path: 'posts/create', component: PostCreateComponent, canActivate: [AuthGuard], },
  { path: 'posts/edit/:id', component: PostEditComponent, canActivate: [AuthGuard], },
  { path: 'posts/details/:id', component: PostDetailsComponent, canActivate: [AuthGuard], }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
