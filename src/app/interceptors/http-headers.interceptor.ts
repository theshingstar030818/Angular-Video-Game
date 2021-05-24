import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
   constructor() {} 

   intercept(
       req: HttpRequest<any>,
       next: HttpHandler
   ): Observable<HttpEvent<any>> {
    req = req.clone({
        setHeaders: {
            "x-rapidapi-key": "d68e9d023amsh0adeaa0c6804d8cp175009jsn4bcaecc339cf",
            "x-rapidapi-host": "rawg-video-games-database.p.rapidapi.com",
        },
        setParams: {
            key: 'f3b26f4325d74acea0d7417f06a97470',
        }
    });
    return next.handle(req);
   }
}