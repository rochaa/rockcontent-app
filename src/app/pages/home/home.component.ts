import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(
    private tokenStorageService: TokenStorageService, 
    private router: Router) { }

  ngOnInit(): void { 
    if (this.tokenStorageService.getToken() == '') {
      this.router.navigate(['/login']);
    }
  }
}
