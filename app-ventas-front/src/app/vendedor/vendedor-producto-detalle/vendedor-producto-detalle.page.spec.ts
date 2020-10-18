import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorProductoDetallePage } from './vendedor-producto-detalle.page';

describe('VendedorProductoDetallePage', () => {
  let component: VendedorProductoDetallePage;
  let fixture: ComponentFixture<VendedorProductoDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorProductoDetallePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorProductoDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
