import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module'
import { UserModule } from './user/user.module';
import { BookmarkController } from './bookmark/bookmark.controller';
import { PrismaModule } from './prisma/prisma.module';
import { BookmarkModule } from './bookmark/bookmark.module';

@Module({
  imports: [AuthModule, UserModule, PrismaModule, BookmarkModule ],
  controllers: [BookmarkController],
})
export class AppModule {}
