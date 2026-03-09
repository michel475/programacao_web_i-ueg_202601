import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSoma(num: number, num2: number): number {
    return num + num2;
  }
}
