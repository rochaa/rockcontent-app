export class ArticleModel {
    constructor(
        public id: string,
        public title: string,
        public text: string,
        public author: string,
        public datePublished: Date,
        public countLikes: number,
        public userMarkLiked: boolean) { }
}