import { Component, inject, Input, input, OnInit } from '@angular/core';
import { Repository } from '../../models/repository.model';
import {
  debounceTime,
  distinctUntilChanged,
  Observable,
  switchMap,
} from 'rxjs';
import { RepositoryService } from '../../service/repository.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-repository',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './repository.component.html',
  styleUrl: './repository.component.scss',
})
export class RepositoryComponent implements OnInit {
  repositories: Repository[] = [];

  private repositoryService = inject(RepositoryService);

  ngOnInit(): void {
    this.repositoryService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }
}
