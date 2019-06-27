import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolicitarInsigniaComponent } from './solicitar-insignia.component';

describe('SolicitarInsigniaComponent', () => {
  let component: SolicitarInsigniaComponent;
  let fixture: ComponentFixture<SolicitarInsigniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitarInsigniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolicitarInsigniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
