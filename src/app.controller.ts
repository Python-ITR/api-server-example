import { Controller, Post, Body, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Response } from 'express';

const LOGIN = 'superuser';
const PASSWORD = 'password';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post('/login')
  login(
    @Body() body: { username: string; password: string },
    @Res() response: Response,
  ): void {
    if (body.username !== LOGIN || body.password !== PASSWORD) {
      response.status(400)
      response.type('html')
      response.end('<h1>Incorrect credentials</h1>');
      return;
    }
    response.cookie('superkey', 'secret_key =)');
    response.end();
  }
}
