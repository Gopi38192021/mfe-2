import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualRemoteComponent } from './actual-remote.component';

describe('ActualRemoteComponent', () => {
  let component: ActualRemoteComponent;
  let fixture: ComponentFixture<ActualRemoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualRemoteComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ActualRemoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
