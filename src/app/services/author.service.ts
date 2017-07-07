import { Injectable } from '@angular/core';

@Injectable()
export class AuthorService {

  constructor() { }

  getAuthors() : string[] {
    let author = 'Author'
    let authArr = []
    for(let i = 1; i <= 4; i++){
      authArr.push(author + i);
    }
    return (authArr);
  }

}


