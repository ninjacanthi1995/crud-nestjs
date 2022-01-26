import { CacheModule, Module } from "@nestjs/common";
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HttpModule } from "@nestjs/axios";

@Module({
  imports: [AuthModule, UsersModule, HttpModule, CacheModule.register()],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
