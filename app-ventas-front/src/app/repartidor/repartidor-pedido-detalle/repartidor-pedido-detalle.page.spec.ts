import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoDetallePage } from './repartidor-pedido-detalle.page';

describe('RepartidorPedidoDetallePage', () => {
  let component: RepartidorPedidoDetallePage;
  let fixture: ComponentFixture<RepartidorPedidoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorPedidoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorPedidoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
