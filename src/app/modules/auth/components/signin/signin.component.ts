import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthFacade } from '../../../../shared/services/auth/auth.facade';
import { AuthService } from '../../../../shared/services/auth/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']

})
export class SigninComponent implements OnInit {
  public loading = true;
  public signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authFacade: AuthFacade,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
    this.isLogged();
    this.findError();
  }

  ngOnInit(): void {
    this.buildForm();
    this.authService.logout();
  }

  private buildForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public onSubmit() {
    if (this.signinForm.valid) {
      this.signin(this.signinForm.value);
    }
  }

  private isLogged() {
    if (this.authFacade.getDataUserStorage()) {
      this.router.navigate(['/cockpit']);
    }
  }

  public signin(data: any) {
    this.authFacade.signin(this.preparetObjSignin(data));
  }

  private findError() {
    this.authFacade.errors.subscribe(res => {
      if (res && res.data) {
        this.toastr.error(res.data[0].message, 'Opa :(');
      }
    });
  }

  private preparetObjSignin(data: any) {
    return {
      email: data.email,
      password: data.password
    };
  }
}
