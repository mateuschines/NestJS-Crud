import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';

@Injectable()
export class TestSubtaskMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    console.log('Middleware2 Teste...');
    next();
  }
}
