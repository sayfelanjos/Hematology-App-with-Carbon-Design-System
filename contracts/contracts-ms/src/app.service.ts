import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private name = 'name';
  getHello(): string {
    return 'Hello World!';
  }
}
