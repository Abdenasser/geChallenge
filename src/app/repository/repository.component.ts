import { Component, Input, OnInit } from '@angular/core';
import { Repository } from '../models/repository.model';

@Component({
  selector: 'app-repository',
  templateUrl: './repository.component.html',
  styleUrls: ['./repository.component.scss'],
})
export class RepositoryComponent implements OnInit {
  @Input() repo: Repository;
  constructor() {}

  ngOnInit(): void {}
}
