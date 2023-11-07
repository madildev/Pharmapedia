import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMedicinesComponent } from './create-medicines.component';

describe('CreateMedicinesComponent', () => {
  let component: CreateMedicinesComponent;
  let fixture: ComponentFixture<CreateMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateMedicinesComponent]
    });
    fixture = TestBed.createComponent(CreateMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
