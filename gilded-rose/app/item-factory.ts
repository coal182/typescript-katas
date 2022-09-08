import { Item, ItemName } from './item';
import { AgedBrie } from './items/aged-brie';
import { BackstagePasses } from './items/backstage-passes';
import { Conjured } from './items/conjured';
import { Standard } from './items/standard';
import { Sulfuras } from './items/sulfuras';
import { Quality } from './items/value-objects/quality';
import { SellIn } from './items/value-objects/sell-in';

export class ItemFactory {
  public create(name: ItemName, sellIn: number, quality: number): Item {
    /*eslint indent: ["error", 2, {"SwitchCase": 1}]*/
    switch (name) {
      case ItemName.AgedBrie:
        return new AgedBrie(name, new SellIn(sellIn), new Quality(quality));
      case ItemName.BackstagePasses:
        return new BackstagePasses(name, new SellIn(sellIn), new Quality(quality));
      case ItemName.Conjured:
        return new Conjured(name, new SellIn(sellIn), new Quality(quality));
      case ItemName.Standard:
        return new Standard(name, new SellIn(sellIn), new Quality(quality));
      case ItemName.Sulfuras:
        return new Sulfuras(name, new SellIn(sellIn), new Quality(quality));
      default: {
        const _exhaustiveCheck: never = name;
        return _exhaustiveCheck;
      }
    }
  }
}
