import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.page.html',
  styleUrls: ['./documentos.page.scss'],
})
export class DocumentosPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      descricaoArquivo: ['', Validators.required],
      documento: ['', Validators.required],
    });
  }

}
