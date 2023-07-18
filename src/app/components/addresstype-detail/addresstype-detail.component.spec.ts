import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTypeDetailComponent } from './addresstype-detail.component';

describe('AddresstypeDetailComponent', () => {
  let component: AddressTypeDetailComponent;
  let fixture: ComponentFixture<AddressTypeDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddressTypeDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTypeDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
