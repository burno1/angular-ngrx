import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CounterComponent} from './counter/counter.component';
import {StoreModule} from '@ngrx/store';
import {counterReducer} from './counter/reducers/counter.reducer';
import {BookListComponent} from './book-list/book-list.component';
import {booksReducer} from "./book-list/state/reducers/book.reducer";
import {collectionReducer} from "./book-list/state/reducers/collection.reducer";
import { BookCollectionComponent } from './book-collection/book-collection.component';
import {HttpClientModule} from "@angular/common/http";

let reducers = {count: counterReducer, books: booksReducer, collection: collectionReducer};

@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    BookListComponent,
    BookCollectionComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
