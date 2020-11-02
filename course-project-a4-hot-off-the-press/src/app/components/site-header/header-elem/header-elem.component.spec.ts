import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderElemComponent } from './header-elem.component';

describe('HeaderElemComponent', () => {
  let component: HeaderElemComponent;
  let fixture: ComponentFixture<HeaderElemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderElemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderElemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
