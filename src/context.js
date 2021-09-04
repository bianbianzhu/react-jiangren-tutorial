// function f () {
//     console.log(this)
// }

// f();

// this.message = "123";

// const f = () => {
//     console.log(this);
// }

// f();

// const dragon = {
//     weapon: 'fire',
//     attack: () => {
//         console.log(`attack with ${this.weapon}`);
//     }

// }

// dragon.attack();

const man = {
  message: "This is ok, this is hahaa",
  speak: function (arg = "") {
    console.log(this.message, arg);
  },
};

man.speak();
man.speak.apply({message: 'this is JS'}, ['from apply']);
man.speak.call({message: 'this is JS'}, 'from call');
