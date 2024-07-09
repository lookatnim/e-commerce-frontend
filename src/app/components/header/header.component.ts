import { Component, OnInit } from '@angular/core';
import { AuthServiceTsService } from 'src/app/services/auth.service.ts.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userRole: any | undefined;

  constructor(private authService: AuthServiceTsService) {}

  ngOnInit(): void {
    this.userRole = this.authService.getUserRole();
    console.log('User Role:', this.authService.getUserRole());
  }

  logout(): void {
    this.authService.logout();
    window.location.reload();
  }
}

