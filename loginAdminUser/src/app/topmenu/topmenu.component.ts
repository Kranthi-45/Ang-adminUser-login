import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-topmenu',
  templateUrl: './topmenu.component.html',
  styleUrls: ['./topmenu.component.css'],
  providers: [SharedService]
})
export class TopmenuComponent implements OnInit {
  logginUser :any;
  status:any;
  loginUserName:any;
  constructor(private _sharedService: SharedService,private router: Router) {
    // this._sharedService.getMessage().subscribe(message => {
    //   console.log(message.value);
    //   this.loggedUser = message.value;
    // });
  }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    this.logginUser = sessionStorage.getItem("logginUser");
    if (this.logginUser) {
      this.status = "Logout";
      this.loginUserName = this.logginUser;
    } else {
      this.status = "Login";
      this.loginUserName = this.logginUser;
    }
  }

  loginLogout(){
    this.router.navigate(['']);
    sessionStorage.removeItem("logginUser");
  }
  
}
