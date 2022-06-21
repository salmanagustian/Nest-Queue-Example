import { Controller, Get } from '@nestjs/common';
import { IUserPurchase } from './interface/user-purchasing.interface';
import { PurchaseService } from './purchase.service';

@Controller('/api/purchase')
export class PurchaseController {
  constructor(private readonly purchaseService: PurchaseService) {}

  @Get()
  async send() {
    const userPurchasingData: IUserPurchase[] = [
      {
        id: '1',
        name: 'Zakhansa',
        items: [
          {
            code: 'A043TU',
            type: 'TV',
            name: '65” Crystal UHD BU8500',
            purchasingDate: new Date(),
          },
          {
            code: 'SKAU002',
            type: 'Sound Device',
            name: 'Q-Series Soundbar HW-Q600B',
            purchasingDate: new Date(),
          },
        ],
      },
      {
        id: '2',
        name: 'Febrian',
        items: [
          {
            code: 'A043TU',
            type: 'TV',
            name: '50" AU7700 UHD 4K Smart TV (2021)',
            purchasingDate: new Date(),
          },
        ],
      },
    ];

    return this.purchaseService.sendInvoiceToCustomer(userPurchasingData);
  }
}
