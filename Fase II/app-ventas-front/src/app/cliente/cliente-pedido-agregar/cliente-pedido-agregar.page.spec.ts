import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientePedidoAgregarPage } from './cliente-pedido-agregar.page';

describe('ClientePedidoAgregarPage', () => {
  let component: ClientePedidoAgregarPage;
  let fixture: ComponentFixture<ClientePedidoAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePedidoAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientePedidoAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
