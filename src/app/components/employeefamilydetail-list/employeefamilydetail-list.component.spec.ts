import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFamilyDetailListComponent } from './employeefamilydetail-list.component';

describe('EmployeeFamilydetailListComponent', () => {
  let component: EmployeeFamilyDetailListComponent;
  let fixture: ComponentFixture<EmployeeFamilyDetailListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeFamilyDetailListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFamilyDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
