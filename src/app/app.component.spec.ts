import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AboutComponent } from './components/about/about.component';
import { AppComponent } from './app.component';
import { ConnectComponent } from './components/connect/connect.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        ConnectComponent,
        ExperienceComponent,
        ProjectComponent,
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'portfolio'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('portfolio');
  });
});
