import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { IUserPurchase } from './interface/user-purchasing.interface';

@Injectable()
export class PurchaseService {
  constructor(@InjectQueue('send-invoice') private purchaseQueue: Queue) {}
  async sendInvoiceToCustomer(data: IUserPurchase[]) {
    // Producers
    await this.purchaseQueue.add({
      invoiceData: data,
    });
  }
}
