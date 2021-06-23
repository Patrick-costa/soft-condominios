import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cad-sindico',
  templateUrl: './cad-sindico.page.html',
  styleUrls: ['./cad-sindico.page.scss'],
})
export class CadSindicoPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      senha: ['', Validators.required]
    });
  }

}
