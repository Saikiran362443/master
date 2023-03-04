import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-profile-dialog',
  templateUrl: './profile-dialog.component.html',
  styleUrls: ['./profile-dialog.component.scss'],
})
export class ProfileDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<any>
  ) {
    console.log(this.data);
    this.data = {
      ...this.data,
      dateOfBirth: new Date(this.data.dateOfBirth),
    };
  }
  update() {
    this.dialogRef.close(this.data);
  }
  cancel() {
    this.dialogRef.close();
  }
}
