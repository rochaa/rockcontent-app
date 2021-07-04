import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {
  user: string | undefined;

  constructor(
    private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void { 
    this.user = this.tokenStorageService.getUser();
  }

  logoff() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
