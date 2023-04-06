import {Component, Inject} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  name: string;
  animal1: string;
  animal2: string;
  option1: boolean;
  option2: boolean;
}

@Component({
  selector: 'apm-demodlg',
  templateUrl: './demodlg.component.html',
  styleUrls: ['./demodlg.component.scss']
})
export class DemodlgComponent {

  userName: string = '';
  userAnimal1: string = '';
  userAnimal2: string = '';
  userOption1 : boolean = false;
  userOption2 : boolean = false;

  constructor(public dialog: MatDialog) {}

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      data: {
        name: this.userName,
        animal1: this.userAnimal1,
        animal2: this.userAnimal2,
        option1: this.userOption1,
        option2: this.userOption2
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.userAnimal1 = result.animal1;
      this.userAnimal2 = result.animal2;
      this.userOption1 = result.option1;
      this.userOption2 = result.option2;
    });
  }
}

@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: './dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {
  constructor(
    public dialogRef: MatDialogRef<DemodlgComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }
}
