import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrls: ['./diretivas-customizadas.component.css']
})
export class DiretivasCustomizadasComponent implements OnInit {

  constructor() { }

  mostrarCursos: boolean = false;

  onClick(){
    this.mostrarCursos = !this.mostrarCursos;
  }

  ngOnInit() {
  }

}