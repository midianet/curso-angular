import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[appFundoAmarelo]'
})
export class FundoAmareloDirective {

  constructor( private renderer: Renderer, private element: ElementRef) {
      this.renderer.setElementStyle(this.element.nativeElement,'background-color','yellow');
      //this.element.nativeElement.style.backgroundColor = 'yellow';
      //console.log(this.renderer);
      //console.log(this.element.nativeElement);
   }

}
