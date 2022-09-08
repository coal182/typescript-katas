import { expect } from 'chai';

import { GildedRose } from '@/gilded-rose';
import { ItemName } from '@/item';
import { ItemFactory } from '@/item-factory';

describe('Gilded Rose', () => {
  const itemFactory = new ItemFactory();
  describe('when update items quality', () => {
    describe('and item is Standard', () => {
      const standardItem = itemFactory.create(ItemName.Standard, 10, 10);
      const gildedRose = new GildedRose([standardItem]);
      it('should decrease quality by one', () => {
        const initialQuality = standardItem.quality.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].quality.getValue()).to.equal(initialQuality - 1);
      });
      it('should decrease sell in by one', () => {
        const initialSellIn = standardItem.sellIn.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn.getValue()).to.equal(initialSellIn - 1);
      });
    });
    describe('and item is Conjured', () => {
      const conjuredItem = itemFactory.create(ItemName.Conjured, 10, 10);
      const gildedRose = new GildedRose([conjuredItem]);
      it('should decrease quality by twice than normal', () => {
        const initialQuality = conjuredItem.quality.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].quality.getValue()).to.equal(initialQuality - 1 * 2);
      });
      it('should decrease sell in by one', () => {
        const initialSellIn = conjuredItem.sellIn.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn.getValue()).to.equal(initialSellIn - 1);
      });
    });
    describe('and item is Sulfuras', () => {
      const sulfurasItem = itemFactory.create(ItemName.Sulfuras, 10, 10);
      const gildedRose = new GildedRose([sulfurasItem]);
      it('should not decrease quality', () => {
        const initialQuality = sulfurasItem.quality.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].quality.getValue()).to.equal(initialQuality);
      });
      it('should not decrease sell in', () => {
        const initialSellIn = sulfurasItem.sellIn.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn.getValue()).to.equal(initialSellIn);
      });
    });
    describe('and item is Aged Brie', () => {
      const agedBrieItem = itemFactory.create(ItemName.AgedBrie, 10, 10);
      const gildedRose = new GildedRose([agedBrieItem]);
      it('should not increase quality by one', () => {
        const initialQuality = agedBrieItem.quality.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].quality.getValue()).to.equal(initialQuality + 1);
      });
      it('should decrease sell in by one', () => {
        const initialSellIn = agedBrieItem.sellIn.getValue();
        const items = gildedRose.updateQuality();
        expect(items[0].sellIn.getValue()).to.equal(initialSellIn - 1);
      });
    });
    describe('and item is Backstage Passes', () => {
      describe('when there are 10 days or less', () => {
        const backstagePassesItem = itemFactory.create(ItemName.BackstagePasses, 10, 10);
        const gildedRose = new GildedRose([backstagePassesItem]);
        it('should increase quality by 2 and should decrease sell in by one', () => {
          const initialQuality = backstagePassesItem.quality.getValue();
          const initialSellIn = backstagePassesItem.sellIn.getValue();
          const items = gildedRose.updateQuality();
          expect(items[0].quality.getValue()).to.equal(initialQuality + 2);
          expect(items[0].sellIn.getValue()).to.equal(initialSellIn - 1);
        });
      });
      describe('when there are 5 days or less', () => {
        const backstagePassesItem = itemFactory.create(ItemName.BackstagePasses, 3, 10);
        const gildedRose = new GildedRose([backstagePassesItem]);
        it('should increase quality by 3 and should decrease sell in by one', () => {
          const initialQuality = backstagePassesItem.quality.getValue();
          const initialSellIn = backstagePassesItem.sellIn.getValue();
          const items = gildedRose.updateQuality();
          expect(items[0].quality.getValue()).to.equal(initialQuality + 3);
          expect(items[0].sellIn.getValue()).to.equal(initialSellIn - 1);
        });
      });
      describe('when 0 days, after the concert', () => {
        const backstagePassesItem = itemFactory.create(ItemName.BackstagePasses, 0, 10);
        const gildedRose = new GildedRose([backstagePassesItem]);
        it('should drops quality to 0 and should keep Sell In as Zero', () => {
          const items = gildedRose.updateQuality();
          expect(items[0].quality.getValue()).to.equal(0);
          expect(items[0].sellIn.getValue()).to.equal(0);
        });
      });
    });
  });
});
