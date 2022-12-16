import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit{
  images: string[] =[
    "https://picsum.photos/200/300?random=1",
    "https://picsum.photos/200/300?random=2",
    "https://picsum.photos/200/300?random=3",
    "https://picsum.photos/200/300",
  ]
  constructor() { }

  ngOnInit(): void {
      
  }

  addImage(){
    let randomNumber: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/200/300?random=${randomNumber}`);
  }

  addImageButton(){
    let randomNumber: number = Math.floor(Math.random() * 60);
    this.images.push(`https://picsum.photos/200/300?random=${randomNumber}`);
  }


}
