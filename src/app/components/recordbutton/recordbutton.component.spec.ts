import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecordbuttonComponent } from './recordbutton.component';

describe('RecordbuttonComponent', () => {
  let component: RecordbuttonComponent;
  let fixture: ComponentFixture<RecordbuttonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecordbuttonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecordbuttonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
