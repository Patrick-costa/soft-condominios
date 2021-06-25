import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizarVisitantePage } from './visualizar-visitante.page';

describe('VisualizarVisitantePage', () => {
  let component: VisualizarVisitantePage;
  let fixture: ComponentFixture<VisualizarVisitantePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarVisitantePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarVisitantePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
