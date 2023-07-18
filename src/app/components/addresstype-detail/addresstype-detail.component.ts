import { Component, Inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from "@angular/material/radio";
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialog, MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ApiService } from 'src/app/services/api.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ReactiveFormsModule } from "@angular/forms";
// import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-addresstype-detail',
  standalone: true,
  imports: [CommonModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule,
    MatButtonModule,
    MatDialogModule,
    ReactiveFormsModule],
  templateUrl: './addresstype-detail.component.html',
  styleUrls: ['./addresstype-detail.component.scss']
})
export class AddressTypeDetailComponent implements OnInit {

  addresstypeForm = new FormGroup({

    id: new FormControl(null),
    addressTypes: new FormControl(null,Validators.required),
  })
  

  constructor(private apiService: ApiService,
    private router: Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<AddressTypeDetailComponent>,
    //  private toaster:ToastrService,
    @Inject(MAT_DIALOG_DATA) public data: any) { }
  //public addresstypeForm:FormGroup;



  ngOnInit() {
    this.addresstypeForm.patchValue(this.data);
  }

  // public hasError = (controlName: string, errorName: string) =>{
  //   return this.employeeForm.controls[controlName].hasError(errorName);
  // }


  onSubmit() {
    if (this.data) {
      console.log(this.addresstypeForm.value)
      this.apiService.updateAddressType(this.data.id, this.addresstypeForm.value)
        .subscribe({
          next: (result) => {
            alert("addressType Updated")
            this.dialogRef.close(true)
          }
        })
    }
    else {
      console.log(this.addresstypeForm.value)
      this.apiService.addAddressType(this.addresstypeForm.value)
        .subscribe({
          next: (result) => {
            alert("addressType Added Successfully")
            this.dialogRef.close(true)
          }
        })
    }
  }

  UpdateAddressType(addresstypeForm: any) {
    this.apiService.updateAddressType(this.route.snapshot.params['id'], this.addresstypeForm.value)
      .subscribe({
        next: (response) => {
          this.router.navigate(['addresstype-list'])
        }
      });
  }


}


