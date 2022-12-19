import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataEmit } from 'src/app/interface/data-emit';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit{

  @Input() total: number; inputA: number; inputB: number;


  @Output() onJumlah: EventEmitter<any> = new EventEmitter();

  constructor(){
    this.inputA = 0 ;
    this.inputB = 0 ;
    this.total = 0 ;
  }

  ngOnInit(): void {
      
  }

  jumlah(): void {
    this.onJumlah.emit({
      inputA: this.inputA,
      inputB: this.inputB
    });
    this.total = this.inputA + this.inputB
  }

  merkCalculator: string = "Casiyo"
  
  getNumberEasy():void {
    alert("Yuhuu");
  }
  
}
