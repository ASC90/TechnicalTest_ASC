import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadAirlinesComponent } from './read-airlines.component';

describe('ReadAirlinesComponent', () => {
  let component: ReadAirlinesComponent;
  let fixture: ComponentFixture<ReadAirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadAirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
