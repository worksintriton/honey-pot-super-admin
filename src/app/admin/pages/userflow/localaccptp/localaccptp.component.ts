import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-localaccptp',
  templateUrl: './localaccptp.component.html',
  styleUrls: ['./localaccptp.component.css']
})
export class LocalaccptpComponent implements OnInit {
  displayPosition: boolean;
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router
  ) { }



  ngOnInit(): void {


    this.rows =
    [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
  ]



  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }

  showPositionDialog() {
    this.displayPosition = true;
}
cus360(){
  this.router.navigateByUrl('/admin_panel/user/createuser')
}
}
