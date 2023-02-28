import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HttpClient } from  '@angular/common/http';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { RequestService } from './services/request.service';
import { AuthService } from './services/auth.service';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ArticlesComponent } from './components/articles/articles.component';
import { UpdateArticleComponent } from './components/articles/update-article/update-article.component';
import { SearchArticleComponent } from './components/search-article/search-article.component';
import { AddArticleComponent } from './components/articles/add-article/add-article.component';
import { DatePickerComponent } from './common/date-picker/date-picker.component';
import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ArticlesComponent,
    UpdateArticleComponent,
    SearchArticleComponent,
    AddArticleComponent,
    DatePickerComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2SearchPipeModule,
    
  ],
  providers: [RequestService,
              AuthService,
              DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
