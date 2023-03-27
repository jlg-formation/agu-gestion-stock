import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AsyncIconButtonComponent } from './async-icon-button.component';

describe('AsyncIconButtonComponent', () => {
  let component: AsyncIconButtonComponent;
  let fixture: ComponentFixture<AsyncIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontAwesomeModule],
      declarations: [AsyncIconButtonComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AsyncIconButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
