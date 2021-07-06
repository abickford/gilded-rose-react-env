import { Item } from './gilded_rose';

/**
 * Increases item quality if it's below the maxQuality
 * @param quality
 * @returns
 */
const increaseQuality = (quality: number) => {
  const maxQuality = 50;
  return quality < maxQuality ? ++quality : quality;
};

/**
 * Decreases item quality if it's over the minQuality
 * @param quality
 * @returns number
 */
const decreaseQuality = (quality: number) => {
  const minQuality = 0;
  return quality > minQuality ? --quality : quality;
};

/**
 * Generic items always reduce quality and sellIn when updated
 * @param item
 * @returns Item
 */
export const updateQualityGeneric = (item: Item) => {
  item.quality = decreaseQuality(item.quality);
  item.quality =
    item.sellIn <= 0 ? decreaseQuality(item.quality) : item.quality;
  item.sellIn--;

  return item;
};

/**
 * Legendary Items will always have 80 quality and never decreases sellIn
 * @param item
 * @returns
 */
export const updateQualityLegendary = (item: Item) => {
  item.quality = 80;

  return item;
};

/**
 * Aged items actually increase in quality as they age
 * @param item
 * @returns
 */
export const updateQualityAged = (item: Item) => {
  item.quality = increaseQuality(item.quality);
  item.quality = item.sellIn < 0 ? increaseQuality(item.quality) : item.quality;
  item.sellIn--;

  return item;
};
