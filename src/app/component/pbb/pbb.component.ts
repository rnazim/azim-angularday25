import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pbb',
  templateUrl: './pbb.component.html',
  styleUrls: ['./pbb.component.css']
})
export class PbbComponent implements OnInit{

  luasTanah:number = 0;
  luasBangunan:number = 0;
  njopTanah:number = 0;
  njopBangunan:number = 0;
  NJOPTKP:number = 12_000_000;
  NJKP:number = 0.2;
  pajakPBB:number = 0.005;
  stimulus:number = 15_000;
  result: number = 0;

  constructor() { }

  ngOnInit(): void {
      
  }

  hitungPBB(){
    let hargaTanah = this.luasTanah * this.njopTanah;
    let hargaBangunan = this.luasBangunan * this.njopBangunan;
    this.result = ((((hargaTanah + hargaBangunan) - this.NJOPTKP) * this.NJKP) * this.pajakPBB) - this.stimulus;
  }
}
