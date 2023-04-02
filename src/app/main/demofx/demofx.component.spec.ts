import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemofxComponent } from './demofx.component';

describe('DemofxComponent', () => {
  let component: DemofxComponent;
  let fixture: ComponentFixture<DemofxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemofxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemofxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
