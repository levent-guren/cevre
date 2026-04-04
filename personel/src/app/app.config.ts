import { ApplicationConfig, InjectionToken, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { urlInterceptor } from './core/interceptor/url-interceptor';
import { environment } from '../environments/environment';
import { authInterceptor } from './core/interceptor/auth-interceptor';

export const APP_CONFIG = new InjectionToken('App Config');

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(withInterceptors([authInterceptor, urlInterceptor])),
    {
      provide: APP_CONFIG,
      useValue: environment,
    },

  ]
};
