import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Festivo } from '../../core/entidades/festivo';

@Injectable({
  providedIn: 'root'
})
export class FestivoService {

  private url: string;
  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJmcmF5IiwiaWF0IjoxNzMxOTg3NjA2LCJleHAiOjE3MzE5ODk0MDZ9.YnWRiUOZtKTawU3wDneQ3ndEWyjN_dVyqZeRmeqMbsE";

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}festivos/`;
  }

  private obtenerHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  public listar(): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listar`, { headers: this.obtenerHeaders() });
  }

  public validar(dia: number, mes: number, año: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}Validar/${dia}/${mes}/${año}`, { headers: this.obtenerHeaders() });
  }

}
