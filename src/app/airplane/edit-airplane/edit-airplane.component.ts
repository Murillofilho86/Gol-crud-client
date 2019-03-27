import { IAirplane } from './../../shared/interfaces/airplane';
import { AirplaneService } from './../../services/airplane.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';

@Component({
  selector: 'app-edit-airplane',
  templateUrl: './edit-airplane.component.html'
})
export class EditAirplaneComponent implements OnInit {

  editForm: FormGroup;

  @Input('id') airplane: IAirplane;
  @ViewChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;
  constructor(
    private formBuilder: FormBuilder,
    private _service: AirplaneService,
    private _router: Router
  ) { }


  ngOnInit() {
    this.editForm = this.formBuilder.group({
      Id: this._service.getAirplaneById(this.airplane.Id),
      Model: this.airplane.Model,
      Code: [null, Validators.required],
      PassengersQuantity: [null, Validators.required],
      CreateDate: [null]
    });


  }

  updateAirplane() {

    const airplane = this.editForm.getRawValue() as IAirplane;
    this._service.updateAirplane(airplane)
      .subscribe(
        () => {
          this._router.navigate([''])
        },
        err => {
          this.errorMessage.setError('Não foi possivel carregar a lista de aviões.', 3000);

        }
      )
  }

}
