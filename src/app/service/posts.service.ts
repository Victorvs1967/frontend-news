import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = "http://localhost:8080/news";

  constructor(private http: HttpClient) { }

  getPosts(): Observable<string> {
    return this.http.get(this.postUrl, { responseType: 'text' });
  }
}
