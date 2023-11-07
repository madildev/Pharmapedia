import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.scss']
})
export class LoginInComponent {

  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) { }

  loginForm = this.formBuilder.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required],
  });

  onSubmit() {

    if (this.loginForm.invalid) {
      return;
    }

    this.authService.logIn(this.loginForm.value)
      .subscribe(res => {
        localStorage.setItem("JwtToken", res.token);
        alert(res.message);
        this.router.navigate(['/categories/dashboard']);
      }, err => {
        alert(err.message);
      });
  }
}
