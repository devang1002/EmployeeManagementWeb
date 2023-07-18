import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTypeListComponent } from './addresstype-list.component';

describe('AddresstypeListComponent', () => {
  let component: AddressTypeListComponent;
  let fixture: ComponentFixture<AddressTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AddressTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddressTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
