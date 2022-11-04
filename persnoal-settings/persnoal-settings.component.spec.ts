import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersnoalSettingsComponent } from './persnoal-settings.component';

describe('PersnoalSettingsComponent', () => {
  let component: PersnoalSettingsComponent;
  let fixture: ComponentFixture<PersnoalSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersnoalSettingsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersnoalSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
