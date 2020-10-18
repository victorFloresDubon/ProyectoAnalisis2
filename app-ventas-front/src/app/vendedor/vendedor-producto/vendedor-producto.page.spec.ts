import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorProductoPage } from './vendedor-producto.page';

describe('VendedorProductoPage', () => {
  let component: VendedorProductoPage;
  let fixture: ComponentFixture<VendedorProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
