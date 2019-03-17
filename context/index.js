const context = {
  exerciseA() {
    const fly = () => {
      console.log(this);
    };

    class SpaceProbe {
      constructor(title, classification) {
        this.title = title;
        this.classification = classification;
        this.fly = fly;
      } 
    }

    const ship = new SpaceProbe('voyager', 'classy');

  
    // What is the value of `this` when we call ship.fly()?
    // it will log the global object because 'this' is not bounded to arrow functions 
    const result = 'global window object';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseB() {
    function fn() {
      const value = 2;
      return this.value;
    }
    
    // What is the value of `this` when we call fn()?
    // the value of 'this.value' will be undefined.
    console.log(fn());
    const result = 'global window object';
    return result;

    // Annotation: 
    // 'this' refers to the global object because fn is not part of a method  and there are no bound objects to the function
    //  since this.value is referring to the global, value is not defined globally it will return undefined
    // Write your annotation here as a comment
  },

  exerciseC() {
    const car = {
      make: 'Tesla',
      getInfo: function(){
        console.log(this);
      }
    };

    const el = document.getElementById('btn');
    el.addEventListener('click', car.getInfo);

    // What is the value of `this` when a user clicks on our element and car.getInfo() is triggered?
    //the value of this would return the 'btn' element object
    const result = 'el';
    return result;

    // Annotation: 
    // The current "owner" of this during the click would be the event listener of the element, hence 
    // this would be the btn elem
    // Write your annotation here as a comment
  },

  exerciseD() {
    const dog = {
      breed: 'Chihuahua',
      getBreed: function(){

        const innerFunction = function() {
          console.log(this.breed);
        };
    
        return innerFunction;
      }
    };

    var breed = dog.getBreed();

    // What is the value of `this` when we call breed()?
    // undefined

    const result = 'global window object';
    return result;

    // Annotation: 
    // NOT Chihuahua because the function itself is not a prop/method, it is by itself
    // functions that are not bound as methods/properties will refer to the global by default
    // Write your annotation here as a comment
  },

  exerciseE() {

    const fn = () => {
      value = 21;
      return this.value;
    };


    // What is the value of `this` when we call fn()?
    // 21 (using the global context)

    const result = 'global window object';
    return result;

    // Annotation: 
    // a global var called value is created, this is referring to the global object and 
    // the property 'value' exists hence returning 21.
    // Write your annotation here as a comment
  },

  exerciseF() {
    class Hero {
      constructor(name, power, canFly = false) {
        this.name = name;
        this.power = power;
        this.canFly = canFly;
      }

      identifyHero() {
        return this;
      }
    }

    const storm = new Hero('Ororo', 'weather control', true);

    // What is the value of `this` when we call storm.identifyHero()?
    // this would refer to the new storm hero instance
    const result = 'instance of Hero';
    return result;

    // Annotation: 
    // 'this' refers to the current instance it is in when that instance is created
    // Write your annotation here as a comment
  },

  exerciseG() {
    class Game {
      constructor(title) {
        this.title = title;
      }

      resetGame() {
        console.log('Clearing the board and starting over');
      }

      restart() {
        setTimeout(function() {
          console.log(`Restarting ${this.title}...`);
        }, 1000);
      }
    }

    const monopoly = new Game('Monopoly');
    monopoly.restart();

    // What is the value of `this` when we call monopoly.restart()?
    // global window object/undefined because the function with 'this' is an anonymous function 
    // and 'this' is not bound to it during its creation
    const result = 'global window object';
    return result;

    // Annotation: 
    // The value of 'this' is not bound to the anonymous function hence it refers to the global object instead
    // Write your annotation here as a comment
  },

  exerciseH() {
    const obj = {
      arrowFunction: null, // () => this;
      method: function() {
        this.arrowFunction = () => { 
          return this;
        };
      }
    };

    obj.method();
    console.log(obj.arrowFunction());
    // What is the value of `this` when we call obj.arrowFunction()?
    // It should have the value of the obj variable;
    const result = 'obj';
    return result;

    // Annotation: 
    // the method inside of obj reassigns the value of arrowFunction to a function that returns 'this'
    // it now becomes a method of the obj and this will refer the current owner of 'this' method
    // Write your annotation here as a comment
  },

  exerciseI() {  
    const poets = [{
      name: 'Sappho'
    }, {
      name: 'Maya'
    }, {
      name: 'Emily'
    }, {
      name: 'Audre'
    }];

    poets.map(function(poet) {
      return this;
    }, poets);

    // What is the value of `this` that gets returned on each iteration of poets.map()?
    // the poets object, because when poets is being mapped, the poets is also being passed in as an argument
    const result = 'poets';
    return result;

    // Annotation:
    // the second argument 'poets' in the map method allows it to use the poets as a reference when using this, because initially, this would
    // refer the the global window object if it is not passed in
    // Write your annotation here as a comment. Annotation should include explanation regarding the second argument of `poets` that is being passed
  },

  exerciseJ() {
    const el = $('#btn');
    el.on('click', function() {
      console.log($(this));
    });

    // What is the value of `this` when a user clicks on our #btn element and the callback is triggered?
    const result = 'el';
    return result;

    // Annotation: 
    // Write your annotation here as a comment.
  }

};

module.exports = context;