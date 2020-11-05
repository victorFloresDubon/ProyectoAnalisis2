import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteProductoAgregarPage } from './cliente-producto-agregar.page';

describe('ClienteProductoAgregarPage', () => {
  let component: ClienteProductoAgregarPage;
  let fixture: ComponentFixture<ClienteProductoAgregarPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteProductoAgregarPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteProductoAgregarPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
