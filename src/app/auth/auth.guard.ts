import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { TokenStorageService } from '../services/token-storage.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private tokenStorageService: TokenStorageService) { }

    canActivate() {
        if (this.tokenStorageService.getToken() == null) {
            this.router.navigate(['/login/'], { queryParams: { returnUrl: this.router.url } });
        }

        return true;
    }
}