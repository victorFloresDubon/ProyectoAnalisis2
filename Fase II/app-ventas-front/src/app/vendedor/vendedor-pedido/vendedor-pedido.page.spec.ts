import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorPedidoPage } from './vendedor-pedido.page';

describe('VendedorPedidoPage', () => {
  let component: VendedorPedidoPage;
  let fixture: ComponentFixture<VendedorPedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorPedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
