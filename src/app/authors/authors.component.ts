import { Component, OnInit } from '@angular/core';
import {AuthorService} from '../services/author.service'


@Component({
  selector: 'authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorService]
})
export class AuthorsComponent {

  title = 'Title for the authors page';
  authors: string[];
  constructor(authorService: AuthorService) {
    this.authors = authorService.getAuthors();
  }

  

}
