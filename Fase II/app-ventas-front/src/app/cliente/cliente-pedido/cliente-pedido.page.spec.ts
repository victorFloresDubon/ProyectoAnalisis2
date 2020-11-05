import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientePedidoPage } from './cliente-pedido.page';

describe('ClientePedidoPage', () => {
  let component: ClientePedidoPage;
  let fixture: ComponentFixture<ClientePedidoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePedidoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientePedidoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
