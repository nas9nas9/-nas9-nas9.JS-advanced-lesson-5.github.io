import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CensorComponent } from './censor.component';

describe('CensorComponent', () => {
  let component: CensorComponent;
  let fixture: ComponentFixture<CensorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CensorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CensorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
