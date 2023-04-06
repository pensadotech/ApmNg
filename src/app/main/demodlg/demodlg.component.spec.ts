import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemodlgComponent } from './demodlg.component';

describe('DemodlgComponent', () => {
  let component: DemodlgComponent;
  let fixture: ComponentFixture<DemodlgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemodlgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemodlgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
