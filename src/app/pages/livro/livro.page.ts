import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.page.html',
  styleUrls: ['./livro.page.scss'],
})
export class LivroPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      tituloOcorrencia: ['', Validators.required],
      descricaoOcorrencia: ['', Validators.required],
      fotoOcorrencia: [''],
    });
  }

}
