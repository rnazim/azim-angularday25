import { Injectable } from '@angular/core';
import { IPost } from '../interface/i-post';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor() { }

  getAllPost(): IPost[]{
    return [
      new Post(1, 'Lorem ipsum', 'ini ahay post first from me 1', true, 'https://picsum.photos/200/150?random=1'),
      new Post(2, 'Lorem ipsum', 'ini ahay post first from me 2', true, 'https://picsum.photos/200/150?random=2'),
      new Post(3, 'Lorem ipsum', 'ini ahay post first from me 3', true, 'https://picsum.photos/200/150?random=3'),
      new Post(4, 'Lorem ipsum', 'ini ahay post first from me 4', true, 'https://picsum.photos/200/150?random=4'),
    ];
  }
}
