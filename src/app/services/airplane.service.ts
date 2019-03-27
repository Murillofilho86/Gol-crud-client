import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { environment } from 'src/environments/environment';
import { IAirplane } from '../shared/interfaces/airplane';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AirplaneService{

    constructor(private http: HttpClient) {
    }

    getAirplanes(): Observable<any[]> {
        return this.http.get<any[]>(environment.URL_API + '/v1/airplanes');
    }
    
    getAirplaneById(id: string): Observable<any> {
        return this.http.get<any>(`${environment.URL_API}/v1/airplanes/${id}`);
    }
    
    createAirplane(airplane: IAirplane): Observable<any> {
        return this.http.post<any>(environment.URL_API + '/v1/airplanes',  airplane);
    }

    updateAirplane(airplane: IAirplane){
        return this.http.put<any>(environment.URL_API + '/v1/airplanes',  airplane);
    }
    
    deleteAirplane(id: string): Observable<any> {
            return this.http.delete<any>(`${environment.URL_API}/v1/airplanes/${id}`);
    }
    
}