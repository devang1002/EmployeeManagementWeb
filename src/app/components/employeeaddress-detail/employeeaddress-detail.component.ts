import { Component ,Inject, OnInit} from '@angular/core';
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

@Component({
  selector: 'app-employeeaddress-detail',
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
  templateUrl: './employeeaddress-detail.component.html',
  styleUrls: ['./employeeaddress-detail.component.scss']
})
export class EmployeeaddressDetailComponent implements OnInit {

  employee:any[]=[]
  addressType:any[]=[]

  employeeaddressForm= new FormGroup({
    id: new FormControl(null),
    address: new FormControl(null,Validators.required),
    employeeId: new FormControl(null,Validators.required),
    city: new FormControl(null,Validators.required),
    state: new FormControl(null,Validators.required),
    country: new FormControl(null,Validators.required),
    pincode: new FormControl(null,Validators.required),
    addressTypeId: new FormControl(null,Validators.required),

  })

  constructor(private apiService:ApiService,
    private router:Router,
    private route: ActivatedRoute,
    private dialogRef: MatDialogRef<EmployeeaddressDetailComponent>,
   //  private toaster:ToastrService,
   @Inject(MAT_DIALOG_DATA) public data: any){}
   //public companyForm:FormGroup;
  
 
 
 ngOnInit(){
   this.employeeaddressForm.patchValue(this.data);
   this.apiService.getAllEmployee()
   .subscribe({
    next:result =>{
      this.employee=result;
    } 
   })
   this.apiService.getAllAddressType()
   .subscribe({
    next:result =>{
      this.addressType=result;
    } 
   })
 }

    onSubmit(){
      if (this.data) {
        console.log(this.employeeaddressForm.value)
        this.apiService.updateEmployeeaddress(this.data.id, this.employeeaddressForm.value)
          .subscribe({
            next: (result) => {
              // alert("user Updated")
              this.dialogRef.close(true) 
            }
          })
      }
      else {
        console.log(this.employeeaddressForm.value)
        this.apiService.addEmployeeaddress(this.employeeaddressForm.value)
        .subscribe({
          next: (result) => {
            this.dialogRef.close(true)
          }
        })
      }
    }
    UpdateEmployeeaddress(employeeaddressForm:any){
      this.apiService.updateEmployeeaddress(this.route.snapshot.params['id'],this.employeeaddressForm.value)
      .subscribe({
        next:(response)=>{
          this.router.navigate(['employeeaddress-list'])
        }
      });
      }
}
