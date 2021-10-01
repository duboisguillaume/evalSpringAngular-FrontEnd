import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfirmiereListeComponent } from './infirmiere-liste.component';

describe('InfirmiereListeComponent', () => {
  let component: InfirmiereListeComponent;
  let fixture: ComponentFixture<InfirmiereListeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfirmiereListeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfirmiereListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
