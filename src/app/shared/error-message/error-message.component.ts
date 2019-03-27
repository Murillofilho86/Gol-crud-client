import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-error-message',
  templateUrl: './error-message.component.html'
})
export class ErrorMessageComponent {

  public _error: string;

  setError(error: string, time: number = 5000) {
    this._error = error;
    setTimeout(() => {
      this._error = null
    }, time);
  }

}
