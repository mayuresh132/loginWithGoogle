import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessResultComponent } from './mess-result.component';

describe('MessResultComponent', () => {
  let component: MessResultComponent;
  let fixture: ComponentFixture<MessResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessResultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
