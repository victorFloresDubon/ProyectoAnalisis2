import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RepartidorInicioPage } from './repartidor-inicio.page';

describe('RepartidorInicioPage', () => {
  let component: RepartidorInicioPage;
  let fixture: ComponentFixture<RepartidorInicioPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepartidorInicioPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RepartidorInicioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
