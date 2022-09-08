import { Item } from '@/item';

export class Conjured extends Item {
  update(): void {
    this.quality.decrease();
    this.quality.decrease();
    this.sellIn.decrease();
  }
}
