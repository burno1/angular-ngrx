import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Book} from "../book-list/state/model/book.model";

@Component({
  selector: 'app-book-collection',
  templateUrl: './book-collection.component.html',
  styleUrls: ['./book-collection.component.scss'],
})
export class BookCollectionComponent {
  @Input() books: ReadonlyArray<Book> = [];
  @Output() remove = new EventEmitter<string>();
}
