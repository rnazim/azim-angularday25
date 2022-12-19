import { Component, OnInit } from '@angular/core';
import { DataEmit } from './interface/data-emit';
import { IPost } from './interface/i-post';
import { IPosting } from './interface/i-posting';
import { Product } from './models/product';
import { PostService } from './service/post.service';
import { PostingService } from './service/posting.service';
import { ProductService } from './service/product.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template: `Halo <app-server>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  postings: IPosting[] = [];
  initialCount: number =10;
  // posts: IPost[] = [];
  // products: Product[];
  // productService: ProductService;

  counting(){
    this.initialCount++;
  }
  // constructor(private postService: PostService){
  // //   this.products = [];
  // //   this.productService = new ProductService();
  // }

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
    // this.posts = this.postService.getAllPost();
    this.postingService.getAll()
    .subscribe(
      (response: IPosting[]) => {
        // console.log(response)
        this.postings = response;
      }
    )
  }
  
  // getProducts() {
  // }

  antrian: string[] = [];
  onAntrianBerubah(dataEmit: any): void{
    console.log("dari anak ke parent: ", dataEmit.antrian);
  }

  inputA: number = 0;
  inputB: number = 0;
  totalX: number = 0;

  onJumlah(dataEmit: any): void{
    this.totalX = dataEmit.inputA + dataEmit.inputB;
  }

  constructor(private postingService: PostingService) {}

}
