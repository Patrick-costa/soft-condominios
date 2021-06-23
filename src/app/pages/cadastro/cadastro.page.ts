import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;
  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      email: ['', Validators.required, Validators.email],
      condominio: ['', Validators.required],
      bloco: [''],
      apartamento: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
