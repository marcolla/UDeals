import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DealCreationComponent } from './deal-creation.component';

describe('DealCreationComponent', () => {
  let component: DealCreationComponent;
  let fixture: ComponentFixture<DealCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DealCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DealCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
