import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../../shared/service/auth-service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  if (req.url.startsWith("/local/")) {
    return next(req);
  }
  const authService = inject(AuthService);
  let headers = req.headers;
  headers = headers.append('Authorization', 'Bearer ' + authService.token);

  const cloneReq = req.clone({
    headers
  });
  return next(cloneReq);
};
