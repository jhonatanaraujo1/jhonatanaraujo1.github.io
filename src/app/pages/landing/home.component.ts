import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import {SendgridService} from 'src/app/services/sendgrid.service';
import {SendgridDto} from '../../dto/sendgrid.dto';

@Component({
  selector: 'app-landing',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public sendgrid?: SendgridDto;
  form: FormGroup;
  submitted = false;
  alert = true

  constructor(public send: SendgridService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      text: ['', Validators.required],
    });
  }


  closeAlert() {
    this.alert = !this.alert
  }

  // buscando os campos de forma facil
  get f() {
    return this.form.controls;
  }

  sendMail() {
    this.submitted = true;

    // Verifica erro no form
    if (this.f.email.errors.email) {
      return;
    }
    // @ts-ignore
    this.sendgrid = new SendgridDto();
    this.sendgrid.name = this.form.get('name').value;
    this.sendgrid.toEmail = this.form.get('email').value;
    this.sendgrid.text = this.form.get('text').value;

    this.send.sendOrcamento(this.sendgrid).then(r => {
      this.alert = true;
    });
  }

}
