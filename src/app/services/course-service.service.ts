import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { CourseUI } from '../models/courseUI';
import { Observable } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';
import { Questions } from '../models/questions';

@Injectable({
  providedIn: 'root'
})
export class CourseService{
  //probably easly change to real Url
  private coursesUI_url = 'api/coursesUI/coursesUI.json';
  private questionUrl = 'api/questionContent/';

  constructor(private http: HttpClient) { }

  getCoursesUI(): Observable<CourseUI[]>{
    return this.http.get<CourseUI[]>(this.coursesUI_url).pipe(
      tap(data => console.log('All: ' + JSON.stringify(data)))
    );
  }

  getQuestion(name:string):Observable<Questions[]>{
    return this.http.get<Questions[]>(`${this.questionUrl}${name}.json`);
  }
}
