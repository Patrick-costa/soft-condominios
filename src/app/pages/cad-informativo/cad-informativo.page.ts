import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cad-informativo',
  templateUrl: './cad-informativo.page.html',
  styleUrls: ['./cad-informativo.page.scss'],
})
export class CadInformativoPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      descricaoInformativo: ['', Validators.required],
      fotoInformativo: ['', Validators.required],
    });
  }

}
