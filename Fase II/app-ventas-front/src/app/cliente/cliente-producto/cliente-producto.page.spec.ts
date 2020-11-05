import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ClienteProductoPage } from './cliente-producto.page';

describe('ClienteProductoPage', () => {
  let component: ClienteProductoPage;
  let fixture: ComponentFixture<ClienteProductoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClienteProductoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ClienteProductoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
