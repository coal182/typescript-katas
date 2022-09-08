import { Item } from './item';
import { Quality } from './items/value-objects/quality';

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  updateQuality() {
    this.items.forEach((item) => {
      item.update();
    });

    /*
    for (let i = 0; i < this.items.length; i++) {
  
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.items[i].quality.getValue() > 0) {
          if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            this.items[i].quality.decrease();
          }
        }
      } else {
        if (this.items[i].quality.getValue() < 50) {
          this.items[i].quality.increase();
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn.getValue() < 11) {
              if (this.items[i].quality.getValue() < 50) {
                this.items[i].quality.increase();
              }
            }
            if (this.items[i].sellIn.getValue() < 6) {
              if (this.items[i].quality.getValue() < 50) {
                this.items[i].quality.increase();
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn.decrease();
      }
      if (this.items[i].sellIn.getValue() < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality.getValue() > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality.decrease;
              }
            }
          } else {
            this.items[i].quality = new Quality(this.items[i].quality.getValue() - this.items[i].quality.getValue());
          }
        } else {
          if (this.items[i].quality.getValue() < 50) {
            this.items[i].quality.increase();
          }
        }
      }
    }
    */

    return this.items;
  }
}
