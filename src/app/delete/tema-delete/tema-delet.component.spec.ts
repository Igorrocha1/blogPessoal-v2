import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemaDeletComponent } from './tema-delet.component';

describe('TemaDeletComponent', () => {
  let component: TemaDeletComponent;
  let fixture: ComponentFixture<TemaDeletComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemaDeletComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemaDeletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
