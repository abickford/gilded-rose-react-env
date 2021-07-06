import { itemName } from '../data/shopItems';
import { Item, Shop } from './gilded_rose';

describe('Gilded Rose', function () {
  it('should foo', function () {
    const gildedRose = new Shop([new Item('foo', 0, 0)]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual('foo');
  });

  it('should decrease in quality by 1 since it is a generic item', () => {
    const generic = new Shop([new Item(itemName.generic, 10, 20)]);
    const items = generic.updateQuality();
    expect(items[0].quality).toEqual(19);
    expect(items[0].sellIn).toEqual(9);
  });

  it('should have a quality of 80 since it is a legendary item', () => {
    const legendary = new Shop([new Item(itemName.sulfuras, 0, 0)]);
    const items = legendary.updateQuality();
    expect(items[0].quality).toEqual(80);
  });

  it('should increase in quality to 10 since it is an aged item', () => {
    const aged = new Shop([new Item(itemName.agedBrie, 5, 9)]);
    const items = aged.updateQuality();
    expect(items[0].quality).toEqual(10);
  });

  it('should increase in quality (value) by 2 if quality < 50 and sellIn < 10 days since it is a timeSensitive item', () => {
    const timeSensitve = new Shop([new Item(itemName.TAFKAL80ETC, 8, 20)]);
    const items = timeSensitve.updateQuality();
    expect(items[0].sellIn).toEqual(7);
    expect(items[0].quality).toEqual(22);
  });

  it('should increase in quality (value) by 3 if quality 50 and sellIn < 6 days since it is a timeSensitive item', () => {
    const timeSensitve = new Shop([new Item(itemName.TAFKAL80ETC, 5, 20)]);
    const items = timeSensitve.updateQuality();
    expect(items[0].quality).toEqual(23);
  });
});
