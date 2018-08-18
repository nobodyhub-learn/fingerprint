import {NgModule} from '@angular/core';
import {MatButtonToggleModule, MatFormFieldModule} from "@angular/material";

@NgModule({
  imports: [
    MatButtonToggleModule,
    MatFormFieldModule
  ],
  exports: [
    MatButtonToggleModule,
    MatFormFieldModule
  ]
})
export class MaterialDesignModule {
}
