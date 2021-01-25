class Animal {
    constructor(name,breed) {
        this.name = name;
        this.breed = breed;
    }
    bark() {
        console.log(`Bark Bark Hello I am ${this.name}`)
    }
    cuddle() {
        console.log(`Bark Bark Hello I am ${this.name} and I am ${this.breed} breed`)
    }
    static info(){
        console.log('Okay')
    }

    get description(){
        return `${this.name},${this.breed}`
    }

}

const snikers = new Animal('Golu','Himalayan Bhote')


class Dog extends Animal {
   
    constructor(name,breed,happy){
        super(name,breed)
        this.happy = happy
    }
    whichAnimal(){
        console.log(`hey i am ${this.name} and i am ${this.happy}`)
    }
}

const golu = new Dog('okay','notgood','very happy')