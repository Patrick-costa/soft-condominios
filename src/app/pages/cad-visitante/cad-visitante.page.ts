import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cad-visitante',
  templateUrl: './cad-visitante.page.html',
  styleUrls: ['./cad-visitante.page.scss'],
})
export class CadVisitantePage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nomeVisitante: ['', Validators.required],
      cpfVisitante: ['', Validators.required],
      tipoVisitante: ['', Validators.required],
      blocoVisitante: ['', Validators.required],
      apartamentoVisitante: ['', Validators.required],
    });
  }

}
