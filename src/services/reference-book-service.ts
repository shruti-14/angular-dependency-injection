import { Injectable } from '@angular/core';
import { BaseService, Book } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class ReferenceBookService implements BaseService {

  constructor() { }
    getBooks() {
        const referenceBooks: Book[] = [
            {
              title: 'Spring in Action',
              description: "Spring in Action, Fourth Edition is a hands-on guide to the Spring Framework",
              price: 600
            }
          ];
      
          return referenceBooks;
    }

}
