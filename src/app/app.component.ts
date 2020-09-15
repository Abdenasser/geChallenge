import { Component } from '@angular/core';
import { RepositoriesService } from './services/repositories.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'geChallenge';
  repos$;
  constructor(public repoService: RepositoriesService) {}

  ngOnInit() {
    this.repos$ = this.repoService.getRecentRepos();
    this.repos$.subscribe((res) => console.log(res));
  }
}
