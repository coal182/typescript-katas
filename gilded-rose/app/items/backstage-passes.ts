import { Item } from '@/item';

export class BackstagePasses extends Item {
  update(): void {
    this.quality.increase();

    if (this.sellIn.getValue() <= 10) this.quality.increase();
    if (this.sellIn.getValue() <= 5) this.quality.increase();

    if (this.sellIn.getValue() === 0) {
      this.quality.setToMinValue();
    }

    this.sellIn.decrease();
  }
}
