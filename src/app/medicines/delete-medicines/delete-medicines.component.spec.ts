import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteMedicinesComponent } from './delete-medicines.component';

describe('DeleteMedicinesComponent', () => {
  let component: DeleteMedicinesComponent;
  let fixture: ComponentFixture<DeleteMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeleteMedicinesComponent]
    });
    fixture = TestBed.createComponent(DeleteMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
