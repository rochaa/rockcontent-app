import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';

@Injectable()
export class UserService extends BaseService {
  baseURL = `${environment.apiUrl}/v1/user`;

  constructor(private client: HttpClient) { super() }

  login(email: string): Observable<any> {
    return this.client.post<any>(`${this.baseURL}/login`, { email }, super.GetHeaderJson());
  }
}
