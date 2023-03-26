import { Posts } from './../models/posts';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { API_PATH } from 'src/environments/environment';
import { API_PATH2 } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) {
    this.http = http;
  }

  findAllPosts(): Observable<Posts[]> {
    return this.http.get<Posts[]>(`${API_PATH}`);
  }

  getComments(postId: any): Observable<any> {
    return this.http.get(`${API_PATH}/${postId}/comments/`).pipe(map((response: any) => {
      return response;
    }))
  }
}

