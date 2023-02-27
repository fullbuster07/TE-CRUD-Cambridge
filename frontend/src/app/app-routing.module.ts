import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './services/auth.guard';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { UpdateArticleComponent } from './components/articles/update-article/update-article.component';
const routes: Routes = [  

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent},

  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'article', component: ArticlesComponent, canActivate: [AuthGuard] },
  { path: 'add-article', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'update-article', component: HomeComponent, canActivate: [AuthGuard] },
  
  //add landing page for wildcard route e.g 404 page not found
  {path:'**', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
