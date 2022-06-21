import { OnQueueCompleted, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('send-invoice')
export class PurchaseProcessor {
  private readonly logger = new Logger(PurchaseProcessor.name);

  // Consumers
  @Process()
  async sendInvoice(job: Job): Promise<void> {
    const userInvoiceData = job.data.invoiceData;

    for await (const data of userInvoiceData) {
      this.logger.debug(`Processing send invoice to ${data.name}...`);
    }
  }

  // Listeners
  @OnQueueCompleted()
  onCompleted(job: Job) {
    this.logger.debug(
      `Job Send Invoice completed with data ${JSON.stringify(job.data)}`,
    );
  }
}
