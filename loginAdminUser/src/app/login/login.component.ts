import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { default as allUsers } from "../../assets/userData.json";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [SharedService]
})
export class LoginComponent implements OnInit {
  
  userData:any;
  loginForm:any;
  status:any;
  unamePattern = "[a-zA-Z0-9]+";
  constructor(private fb: FormBuilder, private router: Router,private _sharedService: SharedService) {
    this.loginForm = this.fb.group({
      // username: ['', [Validators.required ,Validators.pattern("[a-zA-Z0-9]+")]],
      username: ['', [Validators.required, Validators.maxLength(10)]],
      password: ['', [Validators.required, Validators.maxLength(10)]],
    });
  }

  ngOnInit(): void {
    this.userData = allUsers.users;
    console.log(this.userData);
  }
  
  get f(){
    return this.loginForm.controls;
  }
  login() {
    // storing data in shared service as subject & observable to use it
    this._sharedService.search( this.f.username.value);
    this._sharedService.getMessage().subscribe((data:any) => {
      console.log('Subsrcibed Data ', data);
    });
    var username = this.f.username.value;
    var password = this.f.password.value;
    var loggedUser = this.userData.find((user: any) => user.username == username);
    if (loggedUser) {
      if (loggedUser.password == password) {
        console.log("User successfully logged In...");
        this._sharedService.search(loggedUser);
        sessionStorage.setItem("logginUser",loggedUser.username);
        loggedUser.role == "user" ? this.router.navigate(['/user']) : this.router.navigate(['/admin']);
        this.status = false;
      } else {
        console.log("User Password is incorrect...");
        this.status = true;
      }
    } else {
      console.log("User doesn't exits in database");
      this.status = true;
    }
  }

}













    // this.userData.forEach(function (eachUser: any) {
    //   console.log(eachUser);
    //   if(username == eachUser.username){
    //     if(password == eachUser.password){
    //       alert("User successfully logged In...");
    //     }
    //     else{
    //       alert("User password is incorrect...");
    //     }
    //   }else{
    //     alert("User doesn't exits in database");
    //   }
    // });