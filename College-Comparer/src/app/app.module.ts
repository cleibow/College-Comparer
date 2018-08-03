import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { HttpClientModule } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import {
  MatButtonModule,
  MatInputModule,
  MatSidenavModule,
  MatPaginatorModule,
  MatGridListModule,
  MatCardModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatOptionModule,
  MatSelectModule,
  MatDividerModule,
  MatIconModule,
  MatExpansionModule,
  MatTableModule,
  MatRadioModule,
  MatSortModule,
  MatTabsModule,
  MatSliderModule
  } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    FilterComponent,
    FilterPipe

  ],
  imports: [
    MatSliderModule,
    BrowserModule,
    HttpClientModule,
    MatSidenavModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatCardModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatOptionModule,
    MatDividerModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule,
    MatSortModule,
    MatTabsModule,
    FormsModule


  ],
  providers: [


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
