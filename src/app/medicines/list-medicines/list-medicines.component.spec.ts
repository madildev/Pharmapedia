import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ListMedicinesComponent} from './list-medicines.component';

describe('ListMedicinesComponent', () => {
  let component: ListMedicinesComponent;
  let fixture: ComponentFixture<ListMedicinesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListMedicinesComponent]
    });
    fixture = TestBed.createComponent(ListMedicinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
