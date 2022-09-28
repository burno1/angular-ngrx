import {Component} from '@angular/core';
import {addBook, removeBook, retrievedBookList} from "./book-list/state/actions/book.actions";
import {selectBookCollection, selectBooks} from "./book-list/state/selectors/books.selector";
import {GoogleBooksService} from "./book-list/books-service.service";
import {Store} from "@ngrx/store";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books$ = this.store.select(selectBooks);
  bookCollection$ = this.store.select(selectBookCollection);

  onAdd(bookId: string) {
    this.store.dispatch(addBook({ bookId }));
  }

  onRemove(bookId: string) {
    this.store.dispatch(removeBook({ bookId }));
  }

  constructor(
    private booksService: GoogleBooksService,
    private store: Store
  ) {}

  ngOnInit() {
    this.booksService
      .getBooks()
      .subscribe((books) => this.store.dispatch(retrievedBookList({ books })));
  }
}
