import { Component, OnInit, Injector } from '@angular/core';
import { Book, BaseService } from '../../services/base.service';
import { NovelService } from '../../services/novels-service';
import { ReferenceBookService } from '../../services/reference-book-service';

@Component({
  selector: 'app-book',
  template: `<div *ngFor="let book of books">
  <h3>{{ book.title }}</h3>
  <p>{{ book.description }}</p>
</div>
<button (click)="changeMode()">click me!</button>`,
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[];
  isNovelMode = true;
  service;
  
  constructor(private injector: Injector) { }

  ngOnInit() { 
  }
  changeMode() {
    if(this.isNovelMode) {
      this.service = this.injector.get(NovelService);
            
    }else {
      this.service = this.injector.get(ReferenceBookService);
    }
    this.books = this.service.getBooks();
    this.isNovelMode = !this.isNovelMode;
  }

}
