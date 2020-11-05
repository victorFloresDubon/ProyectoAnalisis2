import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoEntregarPage } from './repartidor-pedido-entregar.page';

describe('RepartidorPedidoEntregarPage', () => {
  let component: RepartidorPedidoEntregarPage;
  let fixture: ComponentFixture<RepartidorPedidoEntregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorPedidoEntregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorPedidoEntregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
