import { Component } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProfileDialogComponent } from '../profile-dialog/profile-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent {
  userObj = {
    name: 'Test',
    domain: 'www.test.com',
    gender: 'Female',
    dateOfBirth: '01/01/1990',
    phone: '1234567890',
    phonePrefix: '+91',
    location: 'Silicon Valley, Avenue NE, Huntsville',
  };
  constructor(public dialog: MatDialog) {}
  openDialog() {
    const dialogRef = this.dialog.open(ProfileDialogComponent, {
      data: {
        ...this.userObj,
      },
      disableClose: true,
      width:'400px'
    });
    dialogRef.afterClosed().subscribe((data) => {
      if(data){
        this.userObj = data;
      }
    });
  }
}
