import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { AutentiticacaoService } from '../../share/utils/services/autentiticacao.service';
import { AccountServiceService } from '../../share/utils/services/account-service.service';
import { Router } from '@angular/router';
import { User } from '../../core/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private formBuilder: FormBuilder,
              private autenticacao: AutentiticacaoService,
              private account: AccountServiceService,
              private router: Router,) { }

  public usuario: User;
  hide = true;

  formulario: FormGroup;

  ngOnInit() {
    this.createForm();
  }

  logar(){
    this.autenticacao.login(this.formulario.value)
    .subscribe( complete => this.router.navigate(['folder']), error => console.log(error));
  }

  createForm() {
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
