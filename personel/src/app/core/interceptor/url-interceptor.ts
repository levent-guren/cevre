import { HttpInterceptorFn } from '@angular/common/http';
import { APP_CONFIG } from '../../app.config';
import { inject } from '@angular/core';


export const urlInterceptor: HttpInterceptorFn = (req, next) => {
  let appConfig: any = inject(APP_CONFIG);

  const serverUrl = appConfig.serverUrl;
  let cloneReq = req.clone({
    url: `${serverUrl}${req.url}`
  });
  if (req.url.startsWith('/local/')) {
    // istek sunucudan değil angular projesinden yapılıyor.
    cloneReq = req.clone({
      // url içindeki /local kısmını sil. Geriye kalan kısmı kullan
      url: req.url.slice(6)
    });
  }
  return next(cloneReq);
};
