import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-navbar',
  imports: [MaterialModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private readonly authService: AuthService){}

  logout() {
    this.authService.logout();
  }

}
