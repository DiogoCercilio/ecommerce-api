import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
