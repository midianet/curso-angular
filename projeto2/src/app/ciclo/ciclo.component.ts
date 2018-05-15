import { Component, OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, Input } from '@angular/core';

@Component({
  selector: 'app-ciclo',
  templateUrl: './ciclo.component.html',
  styleUrls: ['./ciclo.component.css']
})
export class CicloComponent implements OnInit, OnChanges, OnDestroy, DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit , AfterViewChecked, OnDestroy {

  constructor() { }

  @Input() valorInicial :  number = 10;

  ngOnInit() {
    this.log('construtor');
  }

  ngOnChanges(){
    this.log('ngOnChanges');
  }

  ngOnDestroy(){
    this.log('ngDestroy');
  }

  ngDoCheck(){
    this.log('ngDoCheck');
  }

  ngAfterContentInit(){
    this.log('ngContentInit');
  }

  ngAfterContentChecked(){
    this.log('ngContentChecked');
  }

  ngAfterViewChecked(){
    this.log('ngViewChecked');
  }

  ngAfterViewInit(){
    this.log('ngAfterViewInit');
  }

  log(value){
    console.log(value);
  }

}
