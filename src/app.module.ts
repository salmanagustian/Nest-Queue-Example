import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QueueConfigModule } from './config/queue/config.module';
import { PurchaseModule } from './purchase/purchase.module';

@Module({
  imports: [QueueConfigModule, PurchaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
