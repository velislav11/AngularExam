import { Component, OnInit, DoCheck } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit,DoCheck {
 
  username: string = '';
  isLoggedIn: boolean;
  
 
  constructor(
    private router: Router,
    private authService: AuthService,
  ) { }

  ngOnInit() {
  }
  ngDoCheck() {
    this.username = localStorage.getItem('username');
    this.isLoggedIn = this.authService.isAuthenticated();
  }

  logout() {
    this.authService.logout()
      .subscribe(() => {
        localStorage.clear();
        this.router.navigate([ '/home' ])
      })
  }
}
