import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubmatchComponent } from './clubmatch.component';

describe('ClubmatchComponent', () => {
  let component: ClubmatchComponent;
  let fixture: ComponentFixture<ClubmatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClubmatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubmatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
