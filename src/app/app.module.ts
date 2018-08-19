import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConditionComponent} from './condition/condition.component';
import {MaterialDesignModule} from './material-design.module';
import {BrowserAnimationsModule} from "node_modules/@angular/platform-browser/animations";
import {ReactiveFormsModule} from "@angular/forms";
import {DetailDialogComponent} from './detail-dialog/detail-dialog.component';
import {ChartsModule} from "ng2-charts";

@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent,
    DetailDialogComponent
  ],
  entryComponents: [
    DetailDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialDesignModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
