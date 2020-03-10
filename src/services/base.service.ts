import { Injectable } from '@angular/core';

export interface Book {
  title: string;
  description: string;
  price: number;
} 
@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  constructor() { }

  abstract getBooks(): Book[];
}
