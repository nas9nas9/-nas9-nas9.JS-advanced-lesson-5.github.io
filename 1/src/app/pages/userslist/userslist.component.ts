import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userslist',
  templateUrl: './userslist.component.html',
  styleUrls: ['./userslist.component.scss']
})
export class UserslistComponent implements OnInit {

  public isBtn = true;
  public inputWrong1 = false;
  public inputWrong2 = false;
  public inputWrong3 = false;
  public userIndex!: number;
  public user = {
    login: '',
    password: '',
    email: ''
  };
  public regExp = {
    login: /^[\w_\-.]{4,20}$/,
    password: /^[\w_\-.\S]{4,20}$/,
    email: /^[a-z0-9_\-.]+@[a-z.]+\.[a-z]+$/
  }
  public usersArray: Array<{
    login: string,
    password: string,
    email: string
  }> = [];

  constructor() { }

  ngOnInit(): void {
  }


  addUser(): void {
    if(!this.checkInputs()) {
      return;
    }
    this.usersArray.push(this.createNewUser());
    this.clearInputs();
  }


  checkInputs(): boolean {
    if(!this.regExp.login.test(this.user.login)) {
      this.inputWrong1 = true;
      return false;
    }
    else {
      this.inputWrong1 = false;
    }
    if(!this.regExp.password.test(this.user.password)) {
      this.inputWrong2 = true;
      return false;
    }
    else {
      this.inputWrong2 = false;
    }
    if(!this.regExp.email.test(this.user.email)) {
      this.inputWrong3 = true;
      return false;
    }
    else {
      this.inputWrong3 = false;
    }
    return true;
  }

  createNewUser() {
    return {
      login: this.user.login,
      password: this.user.password,
      email: this.user.email
    };
  }


  clearInputs():void {
    this.user.login = '';
    this.user.password = '';
    this.user.email = '';
  }


  deleteUser(index: number): void {
    this.usersArray.splice(index, 1);
  }


  editUser(index: number): void {
    this.isBtn = false;
    this.user.login = this.usersArray[index].login;
    this.user.password = this.usersArray[index].password;
    this.user.email = this.usersArray[index].email;
    this.userIndex = index;
  }

  saveEditUser(): void {
    if(!this.checkInputs()) {
      return;
    }
    this.usersArray[this.userIndex] = this.createNewUser();
    this.isBtn = true;
    this.clearInputs();
  }

}
