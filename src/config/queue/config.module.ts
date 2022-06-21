import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { PurchaseQueueModule } from 'src/job/purchase/purchase-queue.module';
import { PurchaseProcessor } from 'src/job/purchase/purchase-queue.processor';
import { QueueConfigProvider } from './config.provider';

@Module({
  imports: [
    BullModule.forRootAsync({ useClass: QueueConfigProvider }),
    BullModule.registerQueue({ name: 'send-invoice' }),
    PurchaseQueueModule,
  ],
  exports: [BullModule],
})
export class QueueConfigModule {}
