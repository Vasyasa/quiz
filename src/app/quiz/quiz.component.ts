import { Component, OnInit } from '@angular/core';
import { Quiz } from '../quiz.interface';
import{ QuizService } from '../quiz.service'


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  quiz: Quiz;
  constructor(
    private quizService: QuizService
  ) { }

  ngOnInit(): any {
    return this.quizService.Generate().subscribe(
      data => {this.quiz = data;
      console.log(this.quiz)}
    )
  }

}
