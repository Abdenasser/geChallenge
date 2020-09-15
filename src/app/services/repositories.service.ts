import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { Repository } from '../models/repository.model';

interface Response {
  incomplete_results: boolean;
  items: Repository[];
  total_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class RepositoriesService {
  readonly API_URL = 'https://api.github.com/search/repositories';

  constructor(private http: HttpClient) {}

  getRecentRepos(page: number = 1): Observable<Repository[]> {
    const lastMonth = new Date(new Date().setMonth(new Date().getMonth() - 1))
      .toISOString()
      .split('T')[0];
    return this.http
      .get(
        `${this.API_URL}?q=created:>${lastMonth}&sort=stars&order=desc&page=${page}`
      )
      .pipe(
        map((result: Response) =>
          result.items.map(
            ({
              name,
              description,
              html_url,
              created_at,
              stargazers_count,
              open_issues,
              owner,
            }) => ({
              name,
              description,
              html_url,
              created_at: new Date(created_at),
              stargazers_count,
              open_issues,
              owner: {
                avatar_url: owner.avatar_url,
                login: owner.login,
                html_url: owner.html_url,
              },
            })
          )
        ),
        catchError((err) => {
          const message = err.error ? err.error.message : err.message;
          console.log('Error :', message);
          return of([]);
        })
      );
  }
}
