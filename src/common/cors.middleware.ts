import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

export class CorsMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  }
}

export default CorsMiddleware;
