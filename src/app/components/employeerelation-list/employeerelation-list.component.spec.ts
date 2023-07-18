import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRelationListComponent } from './employeerelation-list.component';

describe('EmployeerelationListComponent', () => {
  let component: EmployeeRelationListComponent;
  let fixture: ComponentFixture<EmployeeRelationListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeRelationListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRelationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
