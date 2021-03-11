import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from '../article';
import { ArticleService } from '../article.service';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  article:Article=new Article;

  constructor(private route:ActivatedRoute,
              private articleService: ArticleService,
              private router:Router,
              private titleService:Title,
              private SharedService:SharedService) { }

  ngOnInit() {
    
    this.route.params.subscribe(params=>{
      const key=params.key;
      this.articleService.getArticle(key).subscribe(article=>{
        if(article===undefined){
          this.router.navigateByUrl("404")
          return
        }
        this.article=article
      this.titleService.setTitle(`${this.article.title} - ${this.SharedService.blogTitle}`)})
    })
  }

}
