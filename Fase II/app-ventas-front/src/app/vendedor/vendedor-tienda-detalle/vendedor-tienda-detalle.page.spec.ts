import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorTiendaDetallePage } from './vendedor-tienda-detalle.page';

describe('VendedorTiendaDetallePage', () => {
  let component: VendedorTiendaDetallePage;
  let fixture: ComponentFixture<VendedorTiendaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorTiendaDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorTiendaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
