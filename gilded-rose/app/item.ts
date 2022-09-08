import { Quality } from './items/value-objects/quality';
import { SellIn } from './items/value-objects/sell-in';

export enum ItemName {
  AgedBrie = 'Aged Brie',
  BackstagePasses = 'Backstage passes to a TAFKAL80ETC concert',
  Sulfuras = 'Sulfuras, Hand of Ragnaros',
  Conjured = 'Conjured',
  Standard = 'Standard',
}

export abstract class Item {
  name: ItemName;
  sellIn: SellIn;
  quality: Quality;

  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
  public update() {
    this.quality.decrease();
    this.sellIn.decrease();
  }
}
