import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { HttpHandler, HttpRequest, HttpInterceptor } from "@angular/common/http";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private readonly authService: AuthService) {    
    }

    intercept(req: HttpRequest<any>, next: HttpHandler){
        const token = this.authService.getAccessToken();
        if(token) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(cloned);
        }
        return next.handle(req);
    }
}