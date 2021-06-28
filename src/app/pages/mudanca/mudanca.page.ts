import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mudanca',
  templateUrl: './mudanca.page.html',
  styleUrls: ['./mudanca.page.scss'],
})
export class MudancaPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private adapter: DateAdapter<any>) { }

  formulario: FormGroup;
  data: any;


  ngOnInit() {
    this.createForm();
    this.adapter.setLocale('br')
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      diaMudanca: ['', Validators.required],
      horaMudanca: ['', Validators.required],
      elevadorMudanca: ['', Validators.required],
      blocoMudanca: ['', Validators.required],
      apartamentoMudanca: ['', Validators.required],
    });
  }


}
