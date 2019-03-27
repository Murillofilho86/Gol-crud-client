import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AirplaneModule } from './airplane/airplane.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorMessageComponent } from './shared/error-message/error-message.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    AirplaneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
