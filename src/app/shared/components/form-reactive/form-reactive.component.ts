import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.css']
})
export class FormReactiveComponent implements OnInit {

  forma: FormGroup;

  constructor(private fb: FormBuilder, ) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  get nombreInvalido(): boolean {
    return this.forma.get('nombre').invalid && this.forma.get('nombre').touched;
  }

  get apellidoInvalido(): boolean {
    return this.forma.get('apellido').invalid && this.forma.get('apellido').touched;
  }

  get emailInvalido(): boolean {
    return this.forma.get('email').invalid && this.forma.get('email').touched;
  }

  get calleInvalido(): boolean {
    return this.forma.get('direccion.calle').invalid && this.forma.get('direccion.calle').touched;
  }
  get ciudadInvalido(): boolean {
    return this.forma.get('direccion.ciudad').invalid && this.forma.get('direccion.ciudad').touched;
  }
  get validezInvalido(): boolean {
    return this.forma.get('validez').invalid && this.forma.get('validez').touched;
  }

  createForm() {
    this.forma = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellido: ['', Validators.required],
      validez: ['', Validators.required],
      direccion: this.fb.group({
        calle: ['', Validators.required],
        ciudad: ['', Validators.required]
      })
    });
  }


  saveForm() {
    console.log(this.forma);
    // this.loadDataToForm();

    // this.forma.reset();
    // this.forma.reset({
    //   nombre: 'Juan',
    //   apellido: 'Marciaaaal'
    // });
  }

 

}
