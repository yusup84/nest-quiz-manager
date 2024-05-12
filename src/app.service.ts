import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  getSay(): string {
    return 'halo dunia apa kabar';
  }
}
