import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { default as allUsers } from "../../assets/userData.json";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  userData:any;
  userEditForm:any;
  search = "";
  searchNoRecords = false;
  curPage: number | undefined;
  constructor(private fb: FormBuilder, private router: Router) {
    this.userEditForm = this.fb.group({
      username: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      gender: ['', [Validators.required]],
      bloodGroup: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
    this.userData = allUsers.users;
    console.log(this.userData);
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

  fnEdit(u: any) {
    this.userEditForm.patchValue(u);
  }

  save() {
    // no implementation
  }

}
