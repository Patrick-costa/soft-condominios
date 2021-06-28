import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cad-sugestao',
  templateUrl: './cad-sugestao.page.html',
  styleUrls: ['./cad-sugestao.page.scss'],
})
export class CadSugestaoPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  } 

  createForm(){
    this.formulario = this.formBuilder.group({
      tituloSugestao: ['', Validators.required],
      descricaoSugestao: ['', Validators.required],
    });
  }
}
