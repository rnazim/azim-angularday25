import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IPosting } from '../interface/i-posting';

@Injectable({
  providedIn: 'root'
})
export class PostingService {
  private baseURL: string = "https://jsonplaceholder.typicode.com"

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<IPosting[]> {
    return this.http.get<IPosting[]>(`${this.baseURL}/posts`);
  }
}
