import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorInicioPage } from './vendedor-inicio.page';

describe('VendedorInicioPage', () => {
  let component: VendedorInicioPage;
  let fixture: ComponentFixture<VendedorInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
