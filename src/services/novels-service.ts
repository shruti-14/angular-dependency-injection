import { Injectable } from '@angular/core';
import { BaseService, Book } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class NovelService implements BaseService {

  constructor() { }
    getBooks() {
        const novels: Book[] = [
            {
              title: 'War and peace',
              description: "War and Peace broadly focuses on Napoleon's invasion of Russia in 1812",
              price: 550
            }
          ];
      
          return novels;
    }

}
