import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import Swal from 'sweetalert2';
import { UsrSettlementRecordingComponent } from './../usr-settlement-recording/usr-settlement-recording.component';

@Component({
  selector: 'app-usr-followuptake',
  templateUrl: './usr-followuptake.component.html',
  styleUrls: ['./usr-followuptake.component.css']
})
export class UsrFollowuptakeComponent implements OnInit {
  table_v:boolean = false;
  table_s:boolean = false;
  rows = [];
  searchQR: any;
  value1: any;
  constructor(
    private router: Router,
    public dialog: MatDialog,
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
  close(){
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
  show() {
    const dialogRef = this.dialog.open(UsrSettlementRecordingComponent, {
      height: '600px',
      width:'90%'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  
}

