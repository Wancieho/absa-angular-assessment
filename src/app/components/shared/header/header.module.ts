import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';
import { MainNavModule } from '../main-nav/main-nav.module';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    MainNavModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class HeaderModule { }
