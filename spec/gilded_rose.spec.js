const Shop = require('../src/gilded_rose.js');
const Item = require('../src/item.js')

describe("Gilded Rose", function() {

//	- "Conjured" items degrade in Quality twice as fast as normal items

  it("adds first item into shop items array", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
  });
  it("adds item to array with sellin and quality which decreases by -1 everyday", function() {
    const gildedRose = new Shop([ new Item("Bread", 4, 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(3)
    expect(items[0].quality).toEqual(3);
  });
  it("Sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
  it("quality of item should never be a negative number", function() {
    const gildedRose = new Shop([ new Item("Bread", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });
  it("Sell by date has passed, Quality degrades twice as fast", function() {
    const gildedRose = new Shop([ new Item("+5 Dexterity Vest", 0, 10) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(8);
  });
  it("Aged Brie increases in quality every day ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -1 , 4) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-2)
    expect(items[0].quality).toEqual(6);
  }); 
  it("The Quality of an item is never more than 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", -27 , 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-28)
    expect(items[0].quality).toEqual(50);
  });
  it("Sulfuras, being a legendary item, never has to be sold or decreases in Quality", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 0 , 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(0)
    expect(items[0].quality).toEqual(80);
  });
  it("Backstage passes - increases by 2 when there are less than 10 days but more than 6 days left", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(9)
    expect(items[0].quality).toEqual(27);
  });
  it("Backstage passes - increases by 3 when there are less than 5 days left", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 25) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(4)
    expect(items[0].quality).toEqual(28);
  });
  it("Backstage passes - quality stays at 0 after concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(0);
  });
  it("Conjured items degrade in Quality twice as fast as normal items", function () {
    const gildedRose = new Shop([new Item("Conjured Mana Cake", 0, 3)]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(-1)
    expect(items[0].quality).toEqual(1);
  });
 

  

});
