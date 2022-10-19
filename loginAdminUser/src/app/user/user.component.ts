import { Component, OnInit } from '@angular/core';
import { default as allUsers } from "../../assets/userData.json";
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [SharedService]
})
export class UserComponent implements OnInit {

  userData:any;
  search = "";
  searchNoRecords = false;
  curPage: number | undefined;
  constructor(private _sharedService: SharedService) { }

  ngOnInit(): void {
    this.userData = allUsers.users;
    console.log(this.userData);
    // this._sharedService.getMessage().subscribe(message => {
    //   console.log("shared service " + message.value);
    //   // this.loggedUser = message.value;
    // });
  }
  search1() {
    this.userData = allUsers.users;
    const result = this.userData.filter((obj: { username: string; }) => {
      return obj.username.includes(this.search);                // search the records with includes
      // return obj.username == this.search;                     // search for specifix total word
    });
    if (this.search != '') {
      if (result.length != 0) {
        this.userData = result;
        this.searchNoRecords = false;
      } else {
        this.userData = [];
        this.searchNoRecords = true;
      }
    } else {
      this.userData = allUsers.users;
      this.searchNoRecords = false;
    }
    console.log(this.search);
    console.log(result);
  }

}
