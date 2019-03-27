import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAirplaneComponent } from './airplane/create-airplane/create-airplane.component';
import { EditAirplaneComponent } from './airplane/edit-airplane/edit-airplane.component';
import { ListAirplaneComponent } from './airplane/list-airplane/list-airplane.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
    path: 'airplanes',
    component: AppComponent,
    children: [
      { path: '', component: ListAirplaneComponent },
      { path: 'create', component: CreateAirplaneComponent },
      { path: 'edit/:id', component: EditAirplaneComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
