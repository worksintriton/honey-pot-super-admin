import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
@Component({
  selector: 'app-usr-collection-recording',
  templateUrl: './usr-collection-recording.component.html',
  styleUrls: ['./usr-collection-recording.component.css']
})
export class UsrCollectionRecordingComponent implements OnInit {
  table_v:boolean = false;
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router
  ) { }



  ngOnInit(): void {
    this.rows = [{ type: "Dog", name: "dog1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" },
    { type: "Cat", name: "cat1" }]

  }
  client_form() {
    this.router.navigateByUrl('/admin_panel/client-form')
  }
  profile() {
    this.router.navigateByUrl('/admin_panel/Client_profile')
  }
}