import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  username: string = "budi";
  name: string = "budi aye";
  email: string = "budi@gmail.com";

  constructor() { }

  ngOnInit(): void {
      
  }
}
