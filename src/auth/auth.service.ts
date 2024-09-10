import { Injectable } from '@nestjs/common';

@Injectable({})
export class AuthServices {
  signup() {
    return { msg: 'Hello I have Signed Up' };
  }
  signin() {
    return { msg: 'Hello I have Signed In' };
  }
}
