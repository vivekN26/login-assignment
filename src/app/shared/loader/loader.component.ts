import { Component } from '@angular/core';
import { LoaderService } from './loader.service';
import { MaterialModule } from '../material/material.module';

@Component({
  selector: 'app-loader',
  imports: [MaterialModule],
  templateUrl: './loader.component.html',
  styleUrl: './loader.component.scss'
})
export class LoaderComponent {

  constructor(readonly loaderService: LoaderService){}

}
