import { Component, OnInit } from '@angular/core';

export interface UserRegisterDto {
  name: string;
  email: string;
  password: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: UserRegisterDto = { name: '', email: '', password: '' };
  error = '';
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    if (this.user.email && this.user.password && this.user.name) {
      console.log(this.user);
      this.error = '';
    } else {
      this.error = 'No email or password';
    }
  }
}
