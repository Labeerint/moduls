import {makeAutoObservable} from "mobx";

class Store {
    modules = [
        {id:0, name:'Bike', risk: 0.30, minCov: 0, maxCov: 3000, currentCov: 0, price: 0, img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Bicycle.svg/1200px-Bicycle.svg.png'},
        {id:1, name:'Jewelry', risk: 0.05, minCov: 500, maxCov: 10000, currentCov: 500, price: 25, img: 'https://cdn.onlinewebfonts.com/svg/img_205432.png'},
        {id:2, name:'Electronics', risk: 0.35, minCov: 500, maxCov: 6000, currentCov: 500, price: 175, img: 'https://cdn.onlinewebfonts.com/svg/img_431766.png'},
        {id:3, name:'Sports Equipment', risk: 0.30, minCov: 0, maxCov: 20000, currentCov: 0, price: 0, img: 'https://svgsilh.com/svg/1300059.svg'},
    ]
    activeModules = [0,1,2,3]
    totalPrice = 0
    cart = []
    cartCounter = this.cart.length

    constructor() {
        makeAutoObservable(this)
    }

    newInfo = (cov, id) =>{
        this.modules[id].currentCov = cov
        this.modules[id].price = cov * this.modules[id].risk
    }

    addToCart = (item) =>{
        this.cart.push(item)
        this.cartCounter = this.cart.length
        this.totalPrice += item.price
    }

    deleteFromCart = (item) =>{
        this.cart.splice(this.cart.findIndex(i => i.price === item.price && i.name === item.name), 1)
        this.cartCounter = this.cart.length
        this.totalPrice -= item.price
    }
}

export default new Store()