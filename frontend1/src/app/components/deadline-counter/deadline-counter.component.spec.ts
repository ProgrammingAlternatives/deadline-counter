import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeadlineCounterComponent } from './deadline-counter.component';

describe('DeadlineCounterComponent', () => {
  let component: DeadlineCounterComponent;
  let fixture: ComponentFixture<DeadlineCounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeadlineCounterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeadlineCounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
