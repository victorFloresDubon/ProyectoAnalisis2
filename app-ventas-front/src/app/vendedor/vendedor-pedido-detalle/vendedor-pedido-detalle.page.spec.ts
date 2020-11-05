import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorPedidoDetallePage } from './vendedor-pedido-detalle.page';

describe('VendedorPedidoDetallePage', () => {
  let component: VendedorPedidoDetallePage;
  let fixture: ComponentFixture<VendedorPedidoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPedidoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorPedidoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
