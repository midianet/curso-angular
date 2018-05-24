import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ngElse]'
})
export class NgElseDirective {

  @Input() set ngElse(condition: boolean){
      if(!condition){
          this.view.createEmbeddedView(this.template);
      }else{
        this.view.clear();
      }
  }

  constructor(private template: TemplateRef<any>, private view: ViewContainerRef ) {

   }

}
