type Items = {
  code: string;
  type: string;
  name: string;
  purchasingDate: Date;
};

export interface IUserPurchase {
  id: string;
  name: string;
  items: Items[];
}
