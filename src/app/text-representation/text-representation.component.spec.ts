import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextRepresentationComponent } from './text-representation.component';

describe('TextRepresentationComponent', () => {
  let component: TextRepresentationComponent;
  let fixture: ComponentFixture<TextRepresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ TextRepresentationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextRepresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
