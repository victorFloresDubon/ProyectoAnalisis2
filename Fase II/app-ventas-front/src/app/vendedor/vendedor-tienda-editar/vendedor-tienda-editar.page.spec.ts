import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorTiendaEditarPage } from './vendedor-tienda-editar.page';

describe('VendedorTiendaEditarPage', () => {
  let component: VendedorTiendaEditarPage;
  let fixture: ComponentFixture<VendedorTiendaEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorTiendaEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorTiendaEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
