import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAirlinesComponent } from './update-airlines.component';

describe('UpdateAirlinesComponent', () => {
  let component: UpdateAirlinesComponent;
  let fixture: ComponentFixture<UpdateAirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
