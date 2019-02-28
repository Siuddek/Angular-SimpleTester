import { Component, OnInit } from '@angular/core';
import { Questions } from 'src/app/models/questions';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { CourseService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-question-page',
  templateUrl: './question-page.component.html',
  styleUrls: ['./question-page.component.css']
})
export class QuestionPageComponent implements OnInit {
  questions:Questions[];
  remainingQuestions:Questions[];
  courseName:string;
  numberOfQuestions:number;
  randomNumber:number = 1;
  userInputCorrect:boolean;
  showAnswereInfo:boolean;
  correctAnswers:number;
  askedQuestions:number;
  previousNumber:number;
  score:number = 5;

  constructor(private route: ActivatedRoute, private courseService:CourseService) { }

  ngOnInit() {
    const param = this.route.snapshot.paramMap.get('courseName').split(' ').join('-');
    this.courseName = param;
    this.courseService.getQuestion(this.courseName).subscribe(
      quesitons => {this.questions = quesitons, this.remainingQuestions = this.questions},
    )
    this.showAnswereInfo = false;
    this.correctAnswers = 0;
    this.askedQuestions = 0;
    this.score = 0;
  }

  //idk, probably to delete in future 
  asyncValidation():boolean{
    //this.randomNumber = Math.floor(Math.random() * this.remainingQuestions.length);
    return true;
  }

  //listening for event from child component
  answerClickedParent(userAnswer: string){
    this.checkAnswer(userAnswer);
  }

  private checkAnswer(userAnswer: string){
    this.showAnswereInfo = true;
    if(userAnswer == this.remainingQuestions[this.randomNumber].correctAnswer){
      this.userInputCorrect = true;
      this.correctAnswers += 1;
      //delete item from array if answere was correct O(n)
      this.remainingQuestions = this.remainingQuestions.filter(quest => quest !== this.remainingQuestions[this.randomNumber]);
    }
    else{
      this.userInputCorrect = false;
    }
    this.askedQuestions += 1;
    this.score = (this.correctAnswers / this.askedQuestions) * 100;
    this.score.toPrecision(3);
    // new random question
    this.previousNumber = this.randomNumber;
    this.randomNumber = Math.floor(Math.random() * this.remainingQuestions.length);
  }
  
}
