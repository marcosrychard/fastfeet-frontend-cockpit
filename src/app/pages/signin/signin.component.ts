import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent implements OnInit {
  public loading = true;
  public signinForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService
  ) {
   // this.isLogged();
  }

  ngOnInit(): void {
    this.buildForm();
    this.authService.logout();
  }

  buildForm() {
    this.signinForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.signinForm.valid) {
      this.authService.signin(this.preparetObjSignin(this.signinForm.value)).subscribe();
    }
  }

  isLogged() {
    if (this.authService.getDataUserStorage()) {
      this.router.navigate(['/panel']);
    }
  }

  preparetObjSignin(data: any) {
    return {
      email: data.email,
      password: data.password,
    };
  }
}
