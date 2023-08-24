import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlyComponent } from './shortly.component';

describe('ShortlyComponent', () => {
  let component: ShortlyComponent;
  let fixture: ComponentFixture<ShortlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlyComponent]
    });
    fixture = TestBed.createComponent(ShortlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
