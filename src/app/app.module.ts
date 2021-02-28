import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
import { IconCellComponent } from './custom-table/icon-cell/icon-cell.component';
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
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
