import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {

  usuario: any = {};

  constructor() { }

  onSubmit(frm) {
    console.log(frm);
  }

  ngOnInit() {
  }

  verifiy(field) {
      return !field.valid && field.touched;
  }

  showError(field) {
    return {'is-invalid' : this.verifiy(field) };
  }

}
