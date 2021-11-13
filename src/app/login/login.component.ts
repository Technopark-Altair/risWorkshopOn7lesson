import { Component, OnInit } from '@angular/core';

export interface UserLoginDto {
  email: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLoginDto = { email: '', password: '' };
  error = '';

  constructor() {}

  ngOnInit(): void {}

  onSubmit() {
    if (this.user.email && this.user.password) {
      const savedDataAboutUser = {
        email: this.user.email,
      };
      const userStr = JSON.stringify(savedDataAboutUser);
      localStorage.setItem('user', userStr);
      this.error = '';
    } else {
      this.error = 'No email or password';
    }
  }
}
