import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PruebaDeAntisemitaComponent } from './prueba-de-antisemita.component';

describe('PruebaDeAntisemitaComponent', () => {
  let component: PruebaDeAntisemitaComponent;
  let fixture: ComponentFixture<PruebaDeAntisemitaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PruebaDeAntisemitaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PruebaDeAntisemitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
