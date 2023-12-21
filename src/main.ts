import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { RouterLink, provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

//bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));

  bootstrapApplication(AppComponent, { providers: [
    provideHttpClient()
    ,provideRouter(routes),
    FormsModule
  ],
}); 
