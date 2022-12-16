import { Component, OnInit } from '@angular/core';
import { IPost } from './interface/i-post';
import { Product } from './models/product';
import { PostService } from './service/post.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Halo <app-server>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts: IPost[] = [];
  // products: Product[];
  // productService: ProductService;

  constructor(private postService: PostService){
  //   this.products = [];
  //   this.productService = new ProductService();
  }

  

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    this.posts = this.postService.getAllPost();
  }
  
  getProducts() {
  }
}
