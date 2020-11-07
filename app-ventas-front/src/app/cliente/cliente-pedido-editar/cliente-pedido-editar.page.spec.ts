import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClientePedidoEditarPage } from './cliente-pedido-editar.page';

describe('ClientePedidoEditarPage', () => {
  let component: ClientePedidoEditarPage;
  let fixture: ComponentFixture<ClientePedidoEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientePedidoEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClientePedidoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
