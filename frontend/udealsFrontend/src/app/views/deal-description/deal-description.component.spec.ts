import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealDescriptionComponent } from './deal-description.component';

describe('DealDescriptionComponent', () => {
  let component: DealDescriptionComponent;
  let fixture: ComponentFixture<DealDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
