const Item = require('./item.js')

class ConjuredItem extends Item{
    constructor(sellIn, quality)
    super('Conjured Mana Cake', sellIn, quality)
    update() {
        this.sellIn -= 1;
        this.quality = Math.max(0, this.sellIn > 0 ? this.quality - 2 : this.quality - 4)
    }
}
module.exports = ConjuredItem