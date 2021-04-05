import { Component, OnInit } from '@angular/core';
import { PostsService } from './service/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  posts: string = 'No weather';
  errorMessage: string;

  constructor(private postsService: PostsService) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(
      data => this.posts = JSON.parse(data),
      error => this.errorMessage = `${error.status}: ${JSON.parse(error.error).message}`
    );
  }
}
