import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorPedidoPage } from './repartidor-pedido.page';

describe('RepartidorPedidoPage', () => {
  let component: RepartidorPedidoPage;
  let fixture: ComponentFixture<RepartidorPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorPedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
