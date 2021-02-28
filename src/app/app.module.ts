import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { IconCellComponent } from './custom-table/icon-cell/icon-cell.component';
import { FormsModule } from '@angular/forms';
import { NameDateCellComponent } from './custom-table/name-date-cell/name-date-cell.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomTableComponent,
    IconCellComponent,
    NameDateCellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
