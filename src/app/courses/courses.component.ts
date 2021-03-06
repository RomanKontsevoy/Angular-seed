import { Component, OnInit } from '@angular/core';
import {CourseService} from '../services/course/course.service';
//import (AutoGrowDirective) from './../auto-grow.directive'

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  providers: [CourseService],
 // directives: [AutoGrowDirective]
})
export class CoursesComponent  {

  
  title = "The title of courses page";
  courses;
  constructor(courseService: CourseService) {
    this.courses = courseService.getCourses();
  }

}
