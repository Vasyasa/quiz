import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = ([
  { path: '', component: FormsComponent },
  { path: 'quiz', component: QuizComponent }
])

@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    QuizComponent
  ],
  imports: [
  BrowserModule,
  RouterModule.forRoot(routes),
  HttpClientModule],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
