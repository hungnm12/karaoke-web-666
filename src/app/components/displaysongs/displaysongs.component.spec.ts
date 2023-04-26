import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaysongsComponent } from './displaysongs.component';

describe('DisplaysongsComponent', () => {
  let component: DisplaysongsComponent;
  let fixture: ComponentFixture<DisplaysongsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplaysongsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaysongsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
