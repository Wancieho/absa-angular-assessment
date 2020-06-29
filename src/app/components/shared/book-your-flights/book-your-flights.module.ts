import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookYourFlightsComponent } from './book-your-flights.component';

@NgModule({
  declarations: [
    BookYourFlightsComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    BookYourFlightsComponent,
  ],
})
export class BookYourFlightsModule { }
