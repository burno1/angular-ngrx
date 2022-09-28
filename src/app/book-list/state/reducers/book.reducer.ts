import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from '../actions/book.actions';
import { Book } from '../model/book.model';

export const initialState: ReadonlyArray<Book> = [];

export const booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);
