import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Quiz } from './quiz.interface';


@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private URL = 'https://opentdb.com/api.php?';
  amount: string;
  cat: string;
  diff: string;
  quiz: Quiz[];
  constructor(private http: HttpClient ) { }
  Generate(): Observable<Quiz> {
    return this.http.get(`${this.URL}amount=${this.amount}&category=${this.cat}&difficulty=${this.diff}`).pipe( 
        map((data: any) => {
          let quiz = data.results
          return quiz.map((quiz) => {
          return {
            category : quiz.category,
            difficulty : quiz.difficulty,
            question: quiz.question,
            correct_answer: quiz.correct_answer,
            incorrect_answers: quiz.incorrect_answers,
          } as Quiz;
        });
        })
      )
  }
}
