import { Directive, HostListener, ElementRef, Renderer, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHighlighMouse]'
})
export class HighlighMouseDirective {

  @HostListener('mouseenter') onMouseOver(){
    //this.renderer.setElementStyle(this.element.nativeElement,'background-color','yellow');
    this.backgroundColor = 'yellow';  
  }

  @HostListener('mouseleave') onMouseLeave(){
    //this.renderer.setElementStyle(this.element.nativeElement,'background-color','white');
    this.backgroundColor = 'white';
  }

  //@HostBinding('style.backgroundColor') backgroundColor : string;
  @HostBinding('style.backgroundColor') get setColor(){
     return this.backgroundColor;
  }

  backgroundColor: string; // = 'white';

  //constructor(private element: ElementRef, private renderer: Renderer) {
  constructor(){}
  
}