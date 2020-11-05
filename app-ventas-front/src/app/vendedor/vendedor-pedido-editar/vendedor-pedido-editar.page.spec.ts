import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorPedidoEditarPage } from './vendedor-pedido-editar.page';

describe('VendedorPedidoEditarPage', () => {
  let component: VendedorPedidoEditarPage;
  let fixture: ComponentFixture<VendedorPedidoEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorPedidoEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorPedidoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
