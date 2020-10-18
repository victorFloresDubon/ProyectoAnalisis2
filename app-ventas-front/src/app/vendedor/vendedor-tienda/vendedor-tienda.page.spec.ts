import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorTiendaPage } from './vendedor-tienda.page';

describe('VendedorTiendaPage', () => {
  let component: VendedorTiendaPage;
  let fixture: ComponentFixture<VendedorTiendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorTiendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorTiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
