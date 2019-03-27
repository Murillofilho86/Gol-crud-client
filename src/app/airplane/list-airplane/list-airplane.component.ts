import { AirplaneService } from './../../services/airplane.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IAirplane } from 'src/app/shared/interfaces/airplane';
import { ErrorMessageComponent } from 'src/app/shared/error-message/error-message.component';

@Component({
  selector: 'app-list-airplane',
  templateUrl: './list-airplane.component.html'
})
export class ListAirplaneComponent implements OnInit {

  public _airplanes: IAirplane[];
  public id: string;

  @ViewChild(ErrorMessageComponent) errorMessage: ErrorMessageComponent;
  constructor(private service: AirplaneService) { }

  ngOnInit() {
    this.getAirplanes();
  }

  getAirplanes() {
    this.service.getAirplanes()
      .subscribe((airplanes: IAirplane[]) => {
        this._airplanes = airplanes;
      }, () => { this.errorMessage.setError('Não foi possivel carregar a lista de aviões.', 3000); });
  }

  deleteAirplane(id: string) {
    this.service.deleteAirplane(id)
      .subscribe(() => {
        this.getAirplanes();
      }, () => { this.errorMessage.setError('Não foi possivel excluir o registro.', 3000); })
  }

  AirplanesExists(): boolean {
    return this._airplanes && this._airplanes.length > 0;
  }
}
