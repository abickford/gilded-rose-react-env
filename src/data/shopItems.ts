/**
 * Item names to simplify code and reduce errors
 */
export const itemName = {
  agedBrie: 'Aged Brie',
  TAFKAL80ETC: 'Backstage passes to a TAFKAL80ETC concert',
  sulfuras: 'Sulfuras, Hand of Ragnaros',
  generic: 'Generic, very boring item',
  conjuredItem: 'Conjured Item',
};

/**
 * Item association so we can add more items eventually that follow similar rules
 */
export const itemType = {
  conjured: [itemName.conjuredItem],
  legendary: [itemName.sulfuras],
  generic: [itemName.generic],
  aged: [itemName.agedBrie],
  timeSensitive: [itemName.conjuredItem],
};

export const items = [
  {
    name: itemName.agedBrie,
    quality: 3,
    sellIn: 60,
  },
  {
    name: itemName.TAFKAL80ETC,
    quality: 8,
    sellIn: 15,
  },
  {
    name: itemName.sulfuras,
    quality: 80,
    sellIn: 1000,
  },
  {
    name: itemName.generic,
    quality: 2,
    sellIn: 100,
  },
  {
    name: itemName.conjuredItem,
    quality: 40,
    sellIn: 10,
  },
];
