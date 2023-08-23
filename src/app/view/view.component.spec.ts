import { ComponentFixture, TestBed } from '@angular/core/testing';

import { viewComponent } from './view.component';

describe('viewComponent', () => {
  let component: viewComponent;
  let fixture: ComponentFixture<viewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ viewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(viewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
