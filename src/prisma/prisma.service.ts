import { Injectable } from '@nestjs/common';
import {PrismaClient } from '@prisma/client'

@Injectable()
export class PrismaService extends PrismaClient {
  constructor() {
    super({
      datasources: {
        db: {
          url: 'postgresql://postgres:postgres@localhost:5434/nest_js_example?schema=public'
        }
      }
    })
  }
}
