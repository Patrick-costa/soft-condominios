import { Component, OnInit } from '@angular/core';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-cad-encomenda',
  templateUrl: './cad-encomenda.page.html',
  styleUrls: ['./cad-encomenda.page.scss'],
})
export class CadEncomendaPage implements OnInit {

  constructor(private formBuilder: FormBuilder) { }
  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      destinatario: ['', Validators.required],
      numeroBloco: ['', Validators.required],
      apartamentoEntrega: ['', Validators.required],
      descricaoEntrega: ['', Validators.required],
    });
  }

}
