import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {ConditionComponent} from './condition/condition.component';
import {MaterialDesignModule} from './material-design.module';
import {BrowserAnimationsModule} from "node_modules/@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    ConditionComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialDesignModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
