class Basket{
    constructor(){
        this.basket = []
        this.capacity = 5
    }
    addToBasket(item){
        if (!this.isFull()){
            this.basket.push(item)
            return this.basket.length
        }
        else if (this.isFull()){
            return  this.increaseCapacity()
        }
      
         }
    removeFromBasket(bagel){
        const index = this.basket.indexOf(bagel)
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
