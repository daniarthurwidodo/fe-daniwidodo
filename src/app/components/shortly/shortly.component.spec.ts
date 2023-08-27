import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlyComponent } from './shortly.component';
import { HttpClientModule } from '@angular/common/http';
import { ButtonComponent } from '../shared/button/button.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('ShortlyComponent', () => {
  let component: ShortlyComponent;
  let fixture: ComponentFixture<ShortlyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShortlyComponent, ButtonComponent],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(ShortlyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
