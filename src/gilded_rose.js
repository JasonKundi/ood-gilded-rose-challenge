const Item = require('./item.js')
const {
  AgedBrie,
  LegendaryItem,
  BackstagePasses,
  ConjuredItem,
} = require =('./item.js')

class Shop {
  constructor (items = []) {
    this.items = items.map((item) => {
      switch (item.name) {
        case 'Sulfuras, Hand of Ragnaros': return new LegendaryItem()
        case 'Aged Brie': return new AgedBrie(item.sellIn, item.quality)
        case 'Backstage passes to a TAFKAL80ETC concert': return new BackstagePasses(item.sellIn, item.quality)
        case 'Conjured Mana Cake'
      }
    }
  }

  updateQuality () {
    this.items.forEach((item) => item.update())
    
  
  }
}
module.exports = Shop