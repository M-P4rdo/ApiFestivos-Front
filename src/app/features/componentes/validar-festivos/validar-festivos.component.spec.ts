import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidarFestivosComponent } from './validar-festivos.component';

describe('ValidarFestivosComponent', () => {
  let component: ValidarFestivosComponent;
  let fixture: ComponentFixture<ValidarFestivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ValidarFestivosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidarFestivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
