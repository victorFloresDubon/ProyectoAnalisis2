import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorTiendaAgregarPage } from './vendedor-tienda-agregar.page';

describe('VendedorTiendaAgregarPage', () => {
  let component: VendedorTiendaAgregarPage;
  let fixture: ComponentFixture<VendedorTiendaAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorTiendaAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorTiendaAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
