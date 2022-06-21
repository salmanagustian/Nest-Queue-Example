import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PurchaseQueueModule } from 'src/job/purchase/purchase-queue.module';
import { PurchaseController } from './purchase.controller';
import { PurchaseService } from './purchase.service';

@Module({
  imports: [PurchaseQueueModule],
  controllers: [PurchaseController],
  providers: [PurchaseService],
})
export class PurchaseModule {}
