import { Component } from '@angular/core';
import { RepositoriesService } from './services/repositories.service';
import { Repository } from './models/repository.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  repos$: Observable<Repository[]>;
  constructor(public repoService: RepositoriesService) {}

  ngOnInit() {
    this.repos$ = this.repoService.getRecentRepos();
  }
}
