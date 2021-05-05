import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// const REST_API = 'http://localhost:8080/news';
const REST_API = 'https://parser-weather.herokuapp.com/news';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  private postUrl = REST_API;

  constructor(private http: HttpClient) { }

  getPosts(): Observable<string> {
    return this.http.get(this.postUrl, { responseType: 'text' });
  }
}
