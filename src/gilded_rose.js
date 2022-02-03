const Item = require('./item.js')
const AGED_BRIE = 'Aged Brie'
const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert'
const SULFURAS_RAG = 'Sulfuras, Hand of Ragnaros'

class Shop {
  constructor (items = []) {
    this.items = items
  }

  updateQuality () {
    // updateQuality() loops through items array
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name != AGED_BRIE && this.items[i].name != BACKSTAGE_PASSES) {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != SULFURAS_RAG) {
            this.items[i].quality = this.items[i].quality - 1
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1
          if (this.items[i].name == BACKSTAGE_PASSES) {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1
              }
            }
          }
        }
      }
      if (this.items[i].name != SULFURAS_RAG) {
        this.items[i].sellIn = this.items[i].sellIn - 1
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != AGED_BRIE) {
          if (this.items[i].name != BACKSTAGE_PASSES) {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != SULFURAS_RAG) {
                this.items[i].quality = this.items[i].quality - 1
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1
          }
        }
      }
    }

    return this.items
  }
}
module.exports = Shop