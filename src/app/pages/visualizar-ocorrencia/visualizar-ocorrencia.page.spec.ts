import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VisualizarOcorrenciaPage } from './visualizar-ocorrencia.page';

describe('VisualizarOcorrenciaPage', () => {
  let component: VisualizarOcorrenciaPage;
  let fixture: ComponentFixture<VisualizarOcorrenciaPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VisualizarOcorrenciaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VisualizarOcorrenciaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
