import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RepositoryComponent } from './repository/repository/repository.component';
import { Repository } from './models/repository.model';
import { RepositoryService } from './service/repository.service';
import { combineLatest, map, Observable, of, startWith } from 'rxjs';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RepositoryComponent,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  title = 'repo list';
  repo: Repository[] = [];
  language: FormControl<string | null> = new FormControl('');
  name: FormControl<string | null> = new FormControl('');
  public repoService = inject(RepositoryService);
  repositories$: Observable<Repository[]> | undefined;
  filter$: Observable<string>;
  filter: any;
  filteredStates$: any;

  constructor() {
    this.repositories$ = of([] as Repository[]);
    // Initialize the FormControl for name
    this.name = new FormControl('');
    this.filter$ = this.language.valueChanges.pipe(
      map((value) => value ?? ''), // Handle null values by replacing them with an empty string
      startWith('')
    );

    this.filteredStates$ = combineLatest(this.repositories$, this.filter$).pipe(
      map(([states, filterString]) =>
        states.filter(
          (state) =>
            state.full_name
              .toLowerCase()
              .indexOf(filterString.toLowerCase()) !== -1 ||
            (state.language ?? '')
              .toLowerCase()
              .indexOf(filterString.toLowerCase()) !== -1
        )
      )
    );
  }

  ngOnInit() {
    this.repoService.getRepositories().subscribe((repositories) => {
      this.repo = repositories;
    });
  }

  onFilterChange() {}
}
