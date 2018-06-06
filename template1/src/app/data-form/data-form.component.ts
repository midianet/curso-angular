import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Http } from '@angular/http';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {

  form: FormGroup;


  constructor(
    private http: Http,
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    /*
    this.form = new FormGroup({
      nome: new FormControl(null),
      email: new FormControl(null)

    });*/
    this.form = this.formBuilder.group({
      nome: [null,Validators.required],
      email: [null, [Validators.required, Validators.email]]
    })

  }
  reset(){
    this.form.reset();
  }

  verifiy(field) {
    return !this.form.get(field).valid && this.form.get(field).touched;
  }

showError(field) {
  return {'is-invalid' : this.verifiy(field) };
}



  submit(){
    console.log(this.form.value);
    // this.http.post('https://httpbin.org/post',
    //                JSON.stringify(this.form.value)) : Observable<any>
    //   .map(res => res)
    //   .subscrible(dados => console.log(dados));
    this.reset();
  }

}
