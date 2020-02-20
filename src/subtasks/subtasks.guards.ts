import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';

@Injectable()
export class SubtaskGuard implements CanActivate {
    canActivate(
        context: ExecutionContext,
    ): boolean | Promise<boolean> | Observable<boolean> {
        const request = context.switchToHttp().getRequest();
        console.log("Guard --> validate request")
        // console.log(request.headers.authorization)
        return this.validateRequest(request);
    }

    validateRequest(req) {
        return true
    }
}