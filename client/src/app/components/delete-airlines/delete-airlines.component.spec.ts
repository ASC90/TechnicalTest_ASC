import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteAirlinesComponent } from './delete-airlines.component';

describe('DeleteAirlinesComponent', () => {
  let component: DeleteAirlinesComponent;
  let fixture: ComponentFixture<DeleteAirlinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteAirlinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteAirlinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
