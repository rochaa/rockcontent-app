import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { TokenStorageService } from '../../services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    email: null
  };
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private userService: UserService, 
    private tokenStorage: TokenStorageService,
    protected router: Router) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken() != '') {
      this.router.navigate(['/home']);
    }
  }

  onSubmit(): void {
    const { email } = this.form;

    this.userService.login(email).subscribe(
      (data: any) => {
        this.tokenStorage.saveToken(data.token);
        this.tokenStorage.saveUser(data.user);

        this.router.navigate(['/home']);
      },
      (err: any) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
}
