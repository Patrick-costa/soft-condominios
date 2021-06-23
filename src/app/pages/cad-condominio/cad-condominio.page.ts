import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import {  Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-cad-condominio',
  templateUrl: './cad-condominio.page.html',
  styleUrls: ['./cad-condominio.page.scss'],
})
export class CadCondominioPage implements OnInit {

  constructor(private http: HttpClient,
              private alertControl: AlertController,
              private formBuilder: FormBuilder) { }

  dados: any = [];
  cep: string = '';
  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.formulario = this.formBuilder.group({
      razaoSocial: ['', Validators.required],
      nomeFantasia: ['', Validators.required],
      cnpj: ['', Validators.required],
      cep: ['', Validators.required],
      rua: ['', Validators.required],
      cidade: ['', Validators.required],
      estado: ['', Validators.required],
      numero: ['', Validators.required],
      arquivo: ['', Validators.required],
    });
  }

  async consultaCEP(cep) {

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //Expressão regular para validar o CEP.
    if (cep != "") {
      var validacep = /^[0-9]{8}$/;

      if (validacep.test(cep)) {

        this.http.get("//viacep.com.br/ws/" + cep + "/json").subscribe(cep => {
          this.dados = JSON.stringify(cep);
          let viacep = this.dados;
          if (viacep != null) {
            this.dados = JSON.parse(viacep);
            console.log(this.dados);
          }

        });

      } else {
        const alert = await this.alertControl.create({
          header: 'Dado Inválido',
          message: 'CEP informado não é valido',
          buttons: [{
            text: 'Fechar',
            handler: () => {
              this.cep = "";
            }
          }],
        })

        await alert.present();
        
      }
    }

  }

}



