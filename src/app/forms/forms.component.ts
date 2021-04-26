import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Quiz } from '../quiz.interface';
import{ QuizService } from '../quiz.service'

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  private URL = 'https://opentdb.com/api.php?';
  amount: number;
  cat: any[] = [];
  diff: string;
  quiz: Quiz;



  constructor(
    private http: HttpClient,
    private quizService: QuizService
    ) { }
  

  ngOnInit()  {
    return this.http.get('https://opentdb.com/api_category.php').toPromise().then(data => this.cat.push(data))
    }
  
  getAmount(event: any) {
    this.quizService.amount = event.target.value
  }

  getCategory(event: any) {
    this.quizService.cat = event.target.value 
   }

   getDifficulty(event: any) {
    this.quizService.diff = event.target.value 
   }

  // onGenerate() {
  //   this.quizService.Generate().subscribe(
  //     data => {this.quiz = data;
  //     console.log(this.quiz)}
  //   )
  // }

 

}