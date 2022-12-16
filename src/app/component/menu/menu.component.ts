import { Component, OnInit } from '@angular/core';
import { IMenu } from 'src/app/interface/i-menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit{
  menus: IMenu[] = [];
  menu: IMenu;
  pajakPPN: number = 11/100;
  harga: number = 0;
  price: number = 0;
  hasil: number = 0;
  bayar: number = 0;


  constructor(){
    this.menu = {
      name: "",
      price: 0,
      qty: 0,
    }
  }

  private calculate(): void {
    for (let i in this.menus) {
      this.harga += this.price +
      (this.menus[i].price * this.menus[i].qty);
    }
  }

  addMenu(): void {
    let temp: IMenu = {
      name: this.menu.name,
      price: this.menu.price,
      qty: this.menu.qty
    }
    this.menus.push(temp);
    this.harga = 0;
    this.calculate();
  }

  deleteMenu(index: number){
    this.menus.splice(index, 1);
  }

  ngOnInit(): void {
      
  }

  statusPembayaran: boolean = false;

  hitung():void{
    if(this.bayar < ((this.harga * this.pajakPPN) + this.harga)){
      this.statusPembayaran = false;
    }else{
      this.hasil = this.bayar - ((this.harga * this.pajakPPN) + this.harga);
      this.statusPembayaran = true;
    }
  }

  grandTotal: number = 0;

  enter($event: any): void {
    if ($event.which === 13) {
      if(this.bayar < ((this.harga * this.pajakPPN) + this.harga)){
        this.statusPembayaran = false;
      }else{
        this.hasil = this.bayar - ((this.harga * this.pajakPPN) + this.harga);
        this.statusPembayaran = true;
      }
    }
  }


}
