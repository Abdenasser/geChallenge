import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  readonly API_URL = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getRecentRepos(page: number = 1): Observable<any> {
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
      .toISOString()
      .split('T')[0];
    return this.http.get(
      `${this.API_URL}?q=created:>${lastMonth}&sort=stars&order=desc&page=${page}`
    );
  }
}
