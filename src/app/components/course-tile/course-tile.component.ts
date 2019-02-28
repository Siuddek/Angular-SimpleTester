import { Component, OnInit } from '@angular/core';
import { CourseUI } from 'src/app/models/courseUI';
import { CourseService } from 'src/app/services/course-service.service';

@Component({
  selector: 'app-course-tile',
  templateUrl: './course-tile.component.html',
  styleUrls: ['./course-tile.component.css']
})
export class CourseTileComponent implements OnInit {
  courses:CourseUI[];

  constructor(private courseService:CourseService) { }

  //TODO change to some json or sth
  ngOnInit() {
    this.courseService.getCoursesUI().subscribe(
      courses => this.courses = courses
    );
  }


}
