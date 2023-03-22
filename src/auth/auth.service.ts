import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable({})
export class AuthService {
  constructor(private prisma: PrismaService) {}
  signin() {
    return { msg: 'this is sign in', route: '/auth/signin, POST' }
  }

  signup() {
    return { msg: 'this is sign up', route: '/auth/signup, POST' }
  }
}
