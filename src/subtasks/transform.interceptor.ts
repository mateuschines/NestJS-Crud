import { Injectable, NestInterceptor, ExecutionContext, CallHandler, HttpStatus, HttpException } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Response<T> {
    data: T;
}

@Injectable()
export class TransformInterceptor<T> implements NestInterceptor<T, Response<T>> {
    intercept(context: ExecutionContext, next: CallHandler): Observable<Response<T>> | Observable<any> {
        console.log("Interceptor Altera resposta")
        // const teste = true;
        // if (teste) {
        //     throw new HttpException('Teste criado', HttpStatus.FORBIDDEN);
        // }
        return next
            .handle()
            .pipe(
                map(data => {
                    const {id, ...rest} = data
                    return rest
                })
            );
    }
}