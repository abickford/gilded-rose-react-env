import { itemName, itemType } from '../data/shopItems';
import {
  updateQualityAged,
  updateQualityGeneric,
  updateQualityLegendary,
} from './update_quality';

export class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

export class Shop {
  constructor(items = []) {
    this.items = items;
  }
  updateQuality() {
    this.items.forEach((item) => {
      if (itemType.legendary.includes(item.name)) {
        updateQualityLegendary(item);
      } else if (itemType.aged.includes(item.name)) {
        updateQualityAged(item);
      } else if (itemType.generic.includes(item.name)) {
        updateQualityGeneric(item);
      }
      // !TODO: need to refactor all this below
      else {
        if (
          item.name !== itemName.agedBrie &&
          item.name !== itemName.TAFKAL80ETC
        ) {
          if (item.quality > 0) {
            if (item.name !== itemName.sulfuras) {
              item.quality = item.quality - 1;
            }
          }
        } else {
          if (item.quality < 50) {
            item.quality = item.quality + 1;
            if (item.name === itemName.TAFKAL80ETC) {
              if (item.sellIn < 11) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
              if (item.sellIn < 6) {
                if (item.quality < 50) {
                  item.quality = item.quality + 1;
                }
              }
            }
          }
        }
        if (item.name !== itemName.sulfuras) {
          item.sellIn = item.sellIn - 1;
        }
        if (item.sellIn < 0) {
          if (item.name !== itemName.agedBrie) {
            if (item.name !== itemName.TAFKAL80ETC) {
              if (item.quality > 0) {
                if (item.name !== itemName.sulfuras) {
                  item.quality = item.quality - 1;
                }
              }
            } else {
              item.quality = item.quality - item.quality;
            }
          } else {
            if (item.quality < 50) {
              item.quality = item.quality + 1;
            }
          }
        }
      }
    });

    return this.items;
  }
}
