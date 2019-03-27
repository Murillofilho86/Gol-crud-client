import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateAirplaneComponent } from './create-airplane/create-airplane.component';
import { EditAirplaneComponent } from './edit-airplane/edit-airplane.component';
import { ListAirplaneComponent } from './list-airplane/list-airplane.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateAirplaneComponent,
    EditAirplaneComponent,
    ListAirplaneComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule
  ],
  exports: [
    ListAirplaneComponent
  ]
})
export class AirplaneModule { }
