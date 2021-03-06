import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgencyManagementComponent } from './agency-management.component';

describe('AgencyManagementComponent', () => {
  let component: AgencyManagementComponent;
  let fixture: ComponentFixture<AgencyManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgencyManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgencyManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
