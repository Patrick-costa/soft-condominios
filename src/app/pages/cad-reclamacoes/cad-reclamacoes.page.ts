import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({ 
  selector: 'app-cad-reclamacoes',
  templateUrl: './cad-reclamacoes.page.html',
  styleUrls: ['./cad-reclamacoes.page.scss'],
})
export class CadReclamacoesPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      tituloReclamacao: ['', Validators.required],
      descricaoReclamacao: ['', Validators.required],
      tipo: ['', Validators.required],
      fotoReclamacao: [''],
    });
  }

}
