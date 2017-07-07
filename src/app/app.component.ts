import { Component } from '@angular/core';
//import {CoursesComponent} from '.courses/courses.component';
//import {AuthorsComponent} from '.authors/authors.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  //directives: [CoursesComponent, AuthorsComponent]
})
export class AppComponent {
  title = 'boy';
  imageUrl = "http://lorempixel.com/200/150/";
  isActive = true;
  onClick($event){
    $event.stopPropagation();
    console.log("Clicked", $event);
  }
  onDivClick(){
    console.log("Handled by Div");
    
  }
}
// удаляю
