import { Component, Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { LoggerService } from '../Endpoints/logger.endpoint';
import { SignUpEndPoint } from '../Endpoints/sign-up.endpoint';

@Injectable()
@Component({
  selector: 'app-contact-login-form',
  templateUrl: './contact-login-form.component.html',
  styleUrls: ['./contact-login-form.component.scss']
})
export class ContactLoginFormComponent implements OnInit {

  signinForm: FormGroup;
  submitted = false;
  loading = false;
  error = '';
  errormessage = '';
  successMessage = '';
  msgs: Message[] = [];


  constructor(
    private _formBuilder: FormBuilder,
    private signUpEndPoint: SignUpEndPoint,
    private logger: LoggerService,
    private readonly router: Router,

  ) {
    this.signinForm = this._formBuilder.group({
      emai: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  showErrorViaMessages() {
    this.msgs = [];
    this.msgs.push({
      severity: 'error',
      summary: 'Oops!',
      detail: this.error
    });
  }

  onSubmit() {
    console.log(this.signinForm.value);
    this.submitted = true;

    if (this.signinForm.invalid) {
      return;
    }

    //login
    this.loading = true;
    const formData = this.signinForm.value;

    const credentials = {
      email: formData.email,
      password: formData.password
    };

    this.signUpEndPoint.login(credentials).subscribe(
      (data) => {
        this.logger.logInfo('Logged In');
        this.logger.logInfo(data);
        this.loading = false;
        this.router.navigate(['/']);
      },

      (error) => {
        this.error = error.error.message.message;
        this.logger.logInfo(this.error);
        this.showErrorViaMessages();

      }
    );
  }

  forgotPassword() {
    this.router.navigate(['/']);
  }



  ngOnInit(): void {
  }

}
