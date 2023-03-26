import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_PATH2 } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutorService {

  constructor(private http: HttpClient) { }

  findAllAutor(): Observable<any[]> {
    return this.http.get<any[]>(`${API_PATH2}`).pipe(map((response: any) => {
      return response;
    }))
  }

  getDetail(id: any): Observable<any> {
    return this.http.get(`${API_PATH2}/${id}`).pipe(map((response: any) => {
      return response;
    }))
  }
}
