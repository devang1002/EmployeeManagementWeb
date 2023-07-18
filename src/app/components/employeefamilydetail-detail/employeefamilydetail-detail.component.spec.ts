import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFamilyDetailDetailComponent } from './employeefamilydetail-detail.component';

describe('EmployeeFamilyDetailDetailComponent', () => {
  let component: EmployeeFamilyDetailDetailComponent;
  let fixture: ComponentFixture<EmployeeFamilyDetailDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeFamilyDetailDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFamilyDetailDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
