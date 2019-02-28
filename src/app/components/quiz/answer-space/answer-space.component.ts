import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-answer-space',
  templateUrl: './answer-space.component.html',
  styleUrls: ['./answer-space.component.css']
})
export class AnswerSpaceComponent implements OnInit {
  @Input() public answer:string;
  @Output() answerClicked: EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  onAnswerClick(answer:string){
    this.answerClicked.emit(answer);
  }

}
