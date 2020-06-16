import { Component, OnInit } from '@angular/core';
import {BooksService} from "../../services/books.service";

@Component({
  selector: 'app-mainlist',
  templateUrl: './mainlist.component.html',
  styleUrls: ['./mainlist.component.css']
})
export class MainlistComponent implements OnInit {
  books;

  constructor(private booksService: BooksService) { }

  ngOnInit() {
    this.books = this.booksService.getBooks();
  }

}
