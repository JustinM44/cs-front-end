/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RaitingComponent } from './raiting.component';

describe('RaitingComponent', () => {
  let component: RaitingComponent;
  let fixture: ComponentFixture<RaitingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaitingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaitingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
