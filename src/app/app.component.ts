import { Component, HostListener } from '@angular/core';
import { RepositoriesService } from './services/repositories.service';
import { Repository } from './models/repository.model';
import { Observable } from 'rxjs';
import { RepositoryComponent } from './repository/repository.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  repos: Repository[];
  page: number = 1;
  loading = true;
  constructor(public repoService: RepositoriesService) {}

  ngOnInit() {
    this.repoService.getRecentRepos().subscribe((res) => {
      this.repos = res;
    });
  }

  onScroll() {
    this.page++;
    this.repoService.getRecentRepos(this.page).subscribe((res) => {
      this.repos.push(...res);
    });
  }
}
