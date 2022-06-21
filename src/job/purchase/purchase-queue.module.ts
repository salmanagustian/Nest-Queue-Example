import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PurchaseProcessor } from './purchase-queue.processor';

@Module({
  imports: [
    BullModule.registerQueue({
      name: 'send-invoice',
    }),
  ],
  providers: [PurchaseProcessor],
  exports: [BullModule],
})
export class PurchaseQueueModule {}
