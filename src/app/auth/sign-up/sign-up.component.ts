import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {

  constructor(private location: Location,
    private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  signUpForm = this.formBuilder.group({
    Name: ['', Validators.required],
    Email: ['', Validators.required, Validators.email],
    Password: ['', Validators.required],
    confirmPassword: ['', Validators.required]
  })

  goBack() {
    this.location.back();
  }

  onSubmit() {

    if (this.signUpForm.invalid) {
      return;
    }

    this.authService.signUp(this.signUpForm.value)
      .subscribe(res => {
        alert(res.message);
        this.router.navigate(['/auth/login']);
      }, err => {
        alert(err.message);
      });
  }
}
