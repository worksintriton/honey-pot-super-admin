import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import Swal from 'sweetalert2';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-usr-police-case',
  templateUrl: './usr-police-case.component.html',
  styleUrls: ['./usr-police-case.component.css']
})
export class UsrPoliceCaseComponent implements OnInit {
  table_v:boolean = false;
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
  ) { }



  ngOnInit(): void {
    window.scrollTo(0, 0);
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

  close() {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You want to close it!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        this.dialog.closeAll();
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      }
    })
  }
}
