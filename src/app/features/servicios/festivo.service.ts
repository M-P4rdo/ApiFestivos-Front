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
  private token: string = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJNLlBhcmRvIiwiaWF0IjoxNzMyMDYzNTYzLCJleHAiOjE3MzIwNjUzNjN9.AlzUQPfspabLnbjNsH8xgM4E4oMzFe0c85wFQGs0Woc";

  constructor(private http: HttpClient) { 
    this.url = `${environment.urlBase}festivos/`;
  }

  private obtenerHeaders(): HttpHeaders {
    return new HttpHeaders({
      Authorization: `Bearer ${this.token}`,
    });
  }

  public listar(año: number): Observable<Festivo[]> {
    return this.http.get<Festivo[]>(`${this.url}listar/${año}`, { headers: this.obtenerHeaders() });
  }

  public validar(dia: number, mes: number, año: number): Observable<String> {
    return this.http.get<String>(`${this.url}validar/${dia}/${mes}/${año}`, { headers: this.obtenerHeaders(), responseType: 'text' as 'json' });
  }

}
