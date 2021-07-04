import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ArticleModel } from './article.model';
import { Observable } from 'rxjs';
import { BaseService } from 'src/app/services/base.service';
import { catchError } from 'rxjs/operators';
import { ResultModel } from 'src/app/models/result.model';

@Injectable()
export class ArticleService extends BaseService {
  baseURL = `${environment.apiUrl}/v1/article`;

  constructor(private client: HttpClient) { super() }

  getAll(user: string): Observable<ArticleModel[]> {
    return this.client
      .get<ArticleModel[]>(`${this.baseURL}/all/${user}`, super.GetAuthHeaderJson())
      .pipe(catchError(super.serviceError));
  }

  like(user: string, articleId: string): Observable<ResultModel> {
    return this.client
      .post<ResultModel>(`${this.baseURL}/like`, { user, articleId }, super.GetAuthHeaderJson())
      .pipe(catchError(super.serviceError));
  }

  dislike(user: string, articleId: string): Observable<ResultModel> {
    return this.client
      .post<ResultModel>(`${this.baseURL}/dislike`, { user, articleId }, super.GetAuthHeaderJson())
      .pipe(catchError(super.serviceError));
  }
}
