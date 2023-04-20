import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingpageComponent } from './singpage.component';

describe('SingpageComponent', () => {
  let component: SingpageComponent;
  let fixture: ComponentFixture<SingpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SingpageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
