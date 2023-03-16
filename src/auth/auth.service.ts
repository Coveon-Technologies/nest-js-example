import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService {
  signin() {
    return { msg: 'this is sign in' }
  }

  signup() {
    return { msg: 'this is sign in' }
  }
}
