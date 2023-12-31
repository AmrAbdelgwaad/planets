import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JupiterComponent } from './jupiter.component';

describe('JupiterComponent', () => {
  let component: JupiterComponent;
  let fixture: ComponentFixture<JupiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JupiterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JupiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
