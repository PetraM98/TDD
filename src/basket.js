class Basket{
    constructor(){
        this.basket = []
        this.capacity = 5
    }
    addToBasket(item){
        if(this.basket.includes(item)){
            return 'You already have an item with the same ID in your basket'
        }
        if (!this.isFull()){
            this.basket.push(item)
            return this.basket.length
        }
        else if (this.isFull()){
            return  this.increaseCapacity()
        }
      
         }
    removeFromBasket(item){
        if (!this.basket.includes(item)){
            return 'This item is not in your basket'
        }
        const index = this.basket.indexOf(item)
        this.basket.splice(index, 1)
        return this.basket.length
//
    }
    isFull(){
        if (this.basket.length < this.capacity ){
            return false
        }
        else if (this.basket.length >=this.capacity ){
            return true
        }
    }
    increaseCapacity(){
        return this.capacity+=1
    }
}


module.exports = Basket
