import { Component, OnInit } from '@angular/core';
import { ArticleService } from './article.service';
import { ArticleModel } from './article.model';
import { NotificationHelper } from 'src/app/helpers/notification.helper';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html'
})
export class ArticlesComponent implements OnInit {
  searchText: string = "";
  articles: ArticleModel[] | undefined;
  articlesFiltered: ArticleModel[] | undefined;

  constructor(
    private service: ArticleService,
    private tokenStorageService: TokenStorageService,
    private notification: NotificationHelper
  ) { }

  ngOnInit(): void {
    this.loadArticles();
  }

  loadArticles() {
    let user = this.tokenStorageService.getUser();
    this.service.getAll(user).subscribe(
      (articles) => {
        this.articles = articles;
        this.articlesFiltered = this.articles;
      }
    );
  }

  like(articleId: string, userMarkLiked: Boolean) {
    let user = this.tokenStorageService.getUser();

    if (!userMarkLiked) {
      this.service.like(user, articleId).subscribe(
        (result) => {
          if (result.sucess) {
            this.loadArticles();
          }
        }, (result) => {
          this.notification.showErrors(result);
        }
      );
    } else {
      this.service.dislike(user, articleId).subscribe(
        (result) => {
          if (result.sucess) {
            this.loadArticles();
          }
        }, (result) => {
          this.notification.showErrors(result);
        }
      );
    }

  }
}
