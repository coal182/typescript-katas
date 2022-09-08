import { Item, ItemName } from '@/item';

import { Quality } from './value-objects/quality';
import { SellIn } from './value-objects/sell-in';

export class Standard extends Item {
  constructor(name: ItemName, sellIn: SellIn, quality: Quality) {
    super(name, sellIn, quality);
  }

  update(): void {
    this.quality.decrease();
    this.sellIn.decrease();
  }
}
