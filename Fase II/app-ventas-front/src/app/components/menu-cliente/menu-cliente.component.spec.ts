import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuClienteComponent } from './menu-cliente.component';

describe('MenuClienteComponent', () => {
  let component: MenuClienteComponent;
  let fixture: ComponentFixture<MenuClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuClienteComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
