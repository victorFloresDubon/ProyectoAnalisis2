import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendedorProductoEditarPage } from './vendedor-producto-editar.page';

describe('VendedorProductoEditarPage', () => {
  let component: VendedorProductoEditarPage;
  let fixture: ComponentFixture<VendedorProductoEditarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendedorProductoEditarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendedorProductoEditarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
