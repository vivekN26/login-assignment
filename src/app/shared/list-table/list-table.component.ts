import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../material/material.module';

@Component({
  standalone: true,
  selector: 'app-list-table',
  imports: [MaterialModule],
  templateUrl: './list-table.component.html',
  styleUrl: './list-table.component.scss'
})
export class ListTableComponent {

  @Input() columns: any[] = [];
  @Input() data: any[] | null = [];
  @Input() loading!: boolean;
  @Input() error!: string | null;
  @Output() retryTrigger = new EventEmitter();

  retry() {
    this.retryTrigger.emit(true);
  }
}
