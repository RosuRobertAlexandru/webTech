class Duck{
    constructor(name){
        if (typeof name !== 'string') {
            throw new Error('name must be string or String');
        }
        this.name = name
    }
    move(){
        return `${this.name} is moving`
    }
    swim(){
        return `duckie is swimming`
    }
}

class RubberDuck extends Duck {
    constructor(name){
        super(name)
    }
    swim() {
        return `${this.name} can't swim, only float`
    }
    float() {
        return `${this.name} floats`
    }
}



const app = {
    Duck,
    RubberDuck
}

module.exports = app