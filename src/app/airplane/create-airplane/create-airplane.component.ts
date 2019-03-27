import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';
import { AirplaneService } from './../../services/airplane.service';
import { IAirplane } from './../../shared/interfaces/airplane';

@Component({
  selector: 'app-create-airplane',
  templateUrl: './create-airplane.component.html'
})
export class CreateAirplaneComponent implements OnInit {
  @ViewChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;

  createForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _service: AirplaneService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      Model: [
        null

      ],
      Code: [null],
      PassengersQuantity: [
        null
      ]
    });
  }


  createAirplane() {
    const airplane = this.createForm.getRawValue() as IAirplane;

    this._service.createAirplane(airplane)
      .subscribe(
        () => {
          this._router.navigate(['']),
            this.resetForm();
        },
        err => {
          this.errorMessage.setError('Não foi possivel carregar a lista de aviões.', 3000);
          this.resetForm();
        }
      )
  }
  resetForm() {
    this.createForm.reset();
  }
}
