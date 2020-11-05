import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorProductoAgregarPage } from './vendedor-producto-agregar.page';

describe('VendedorProductoAgregarPage', () => {
  let component: VendedorProductoAgregarPage;
  let fixture: ComponentFixture<VendedorProductoAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorProductoAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorProductoAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
