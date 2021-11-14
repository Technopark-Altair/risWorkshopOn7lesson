import { Component, OnInit } from '@angular/core';

export interface UserRegisterDto {
  name: string;
  surname: string;
  patronymic?: string;
  email: string;
  password: string;
  passwordConfirm: string;
  birthDate: string;
  gender: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  user: UserRegisterDto = {
    name: '',
    surname: '',
    patronymic: '',
    email: '',
    password: '',
    passwordConfirm: '',
    birthDate: '',
    gender: '',
  };
  constructor() {}

  ngOnInit(): void {}
  onSubmit() {
    console.log(this.user);
  }
}
