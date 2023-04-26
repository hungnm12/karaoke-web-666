import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GernesComponent } from './gernes.component';

describe('GernesComponent', () => {
  let component: GernesComponent;
  let fixture: ComponentFixture<GernesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GernesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GernesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
