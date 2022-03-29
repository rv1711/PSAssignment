import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollableDivsComponent } from './scrollable-divs.component';

describe('ScrollableDivsComponent', () => {
  let component: ScrollableDivsComponent;
  let fixture: ComponentFixture<ScrollableDivsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrollableDivsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollableDivsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
