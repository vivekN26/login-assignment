import { Component, OnInit, signal } from '@angular/core';
import { ListService } from './listing.service';
import { Observable } from 'rxjs';
import { List } from './list.model';

@Component({
  selector: 'app-listing',
  standalone: false,
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss',
})
export class ListingComponent implements OnInit {

  readonly COLUMN_DEF = [
    {
      columnDef: 'id', header: 'ID',
    }, {
      columnDef: 'name', header: 'Name',
    },
    {
      columnDef: 'description', header: 'Desc',
    }
  ];

  constructor(private readonly listService: ListService){}

  items = signal<List[]>([]); 
  loading = signal(false);
  error = signal<string | null>(null);

  ngOnInit() {
    this.getItems();
  }

  getItems(retry = false) {
    this.loading.set(true);
    if(retry) {
      this.error.set(null);
    }
    this.listService.getItems().subscribe({
      next: (items) => {
        this.items.set(items);
        this.loading.set(false);
        this.error.set(null);
      }, error: (e) => {
        this.error.set('Something went wrong');
        this.loading.set(false);
      }
    })
  }
}
