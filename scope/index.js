const scope = {
  exerciseA() {
    let personA = 'Paul';
    let personB = 'Ben';
    let personC = 'Tom';

    function changePerson() {
      if (personA === 'Paul') {
        person = 'CardiB';
        beautifyPerson();
      }

      function beautifyPerson() {
        // Log A: personB// 1st: Ben
        console.log('person: ', personB); 
        
        if (personB.includes('B')) {
          personB = person;
          personC = personB;
          // Log B: personC // 2nd: CardiB
          console.log('person: ', personC); 
        }
      }

      personC = personA;

      // Log C: personB // 3rd: CardiB
      console.log('person: ', personB); 
    }

    changePerson();

    // Log D: personC  // 4th: Paul
    console.log('person: ', personC);

    const result = [
      { A: 'Ben' },
      { B: 'CardiB' },
      { C: 'CardiB' },
      { D: 'Paul' },
    ];
    return result;

    // Annotation:
    // A: Ben is declared within a grand parent function scope
    // B: person variable is declared and 
  },

  exerciseB() {
    let number = 30;

    function numberFunction() {
      let number = 75;

      if (number === 75) {
        let number = 28;
      }

      // Log A: number  1st: 75
      console.log('A: ', number); 

      function newNumber() {
        number = 64;

        // Log B: number 2nd: 64
        console.log('B: ', number); 
      }

      newNumber();

      // Log C: number // 3rd: 64
      console.log('C: ', number);
    }

    numberFunction();

    // Log D: number  // 4th: 30;
    console.log('D: ', number); 

    const result = [
      { A: 75 },
      { B: 64 },
      { C: 64 },
      { D: 30 },
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseC() {
    let greeting = 'Hello';

    function greetingFunction() {
      var greeting = 'Yo';

      if (greeting === 'Yo') {
        let greeting = 'Howdy';
      }

      // Log A: greeting // 1st: 'Yo'
      console.log('A: ', greeting);

      function newPhrase() {
        greeting = 'Hey';

        // Log B: greeting // 2nd: Hey
        console.log('B: ', greeting);
      }

      newPhrase();

      // Log C: greeting // 3rd: Hey
      console.log('C: ', greeting);
    }

    greetingFunction();

    // Log D: greeting // 4th: Hello
    console.log('D: ', greeting);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseD() {
    let greeting = 'howdy';

    const greetingGenerator = () => {
      let greeting = 'hi';

      if (greeting === 'hi') {
        let greeting = 'hello';
      }

      // Log A: greeting // 1st: hi
      console.log('A: ', greeting);

      const newGreeting = ()  => {
        greeting = 'welcome';

        // Log B: greeting // 2nd: welcome
        console.log('B: ', greeting);
      };

      newGreeting();

      // Log C: greeting //3rd: welcome
      console.log('C: ', greeting);
    };

    greetingGenerator();
 
    // Log D: greeting // 4th: howdy
    console.log('D: ', greeting);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseE() {
    let name = 'Brittany';

    function sayName() {
      let name = 'Pam';

      if (name === 'Pam') {
        name = 'Nathaniel';

        if (name.length > 0) {
          let name = 'Brittany';
        }

        // Log A: name //2nd: Nathaniel
        console.log('A: ', name);
      }

      // Log B: name // 3rd: Nathaniel
      console.log('B: ', name);
    }

    // Log C: name //1st : Brittany
    console.log('C: ', name);

    sayName();

    // Log D: name // 4th: Brittany
    console.log('D: ', name);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseF() { // GLOBAL SCOPE
    var dog = 'Spot';

    function petDog() { // FUNC SCOPE
      // Log A: dog// 1st: Spot
      console.log('A: ', dog);

      if (dog === 'Spot') { // BLOCK SCOPE
        let dog = 'Fluffy';
      }

      function rollOver() { // FUNC SCOPE
        // Log B: dog // 2nd: Spot
        console.log('B: ', dog);

        dog = 'Biscuit';

        // Log C: dog // 3rd: Biscuit
        console.log('C: ', dog);

      }

      rollOver();

      // Log D: dog // 4th: Biscuit
      console.log('D: ', dog);
    }

    petDog();

    // Log E: dog // 5th: Biscuit
    console.log('E: ', dog);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseG() {
    var fruit = 'apple';

    function eatFruit() {

      if (fruit !== 'kiwi') {
        var fruit = 'mango';

        if (fruit) {
          // Log A: fruit // reference error
          // console.log('A: ', fruit);
          // const fruit = 'strawberry';
        }
        // Log B: fruit // mango
        console.log('B: ', fruit);
      }

      // Log C: fruit // mango
      console.log('C: ', fruit);
    }

    eatFruit();

    // Log D: fruit // apple
    console.log('D: ', fruit);

    const result = [
      { A: 'reference error' },
      { B: 'mango' },
      { C: 'mango' },
      { D: 'apple' }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseH() {
    let num = 6;

    const fn1 = function() {
      let num = 4;

      // Log A: num // 4
      console.log('A: ', num);

      if (num < 5) {
        const num = 9;

        fn2(num);

        const newNum = num;

        // Log B: newNum 9
        console.log('B: ', num);
      }

      newNum = num;

      // Log C: newNum // 4
      console.log('C: ', num);
    };

    const fn2 = function(num){
      // Log D: num // 9
      console.log('D: ', num);
      num = num + 1;

      // Log E: num // 10
      console.log('E: ', num);
    };

    fn1();

    const result = [
      { A: 4 },
      { D: 9 },
      { E: 10 },
      { B: 9 },
      { C: 4 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseI() {
    var hunger = 100;

    function eatSnack() {
      hunger -= 25;
      // Log A: hunger // 1st: 75 // 5th: 55
      console.log('A: ', hunger);
      gorgeYourself();

      function gorgeYourself() {
        const hunger = 0;
        // Log B: hunger // 2nd: 0 // 6th: 0
        console.log('B: ', hunger);
      }

      // Log C: hunger // 3rd: 75 // 7th: 55
      console.log('C: ', hunger);
    }

    eatSnack();

    hunger += 5;
    // Log D: hunger // 4th: 80
    console.log('D: ', hunger);

    eatSnack();
    // Log E: hunger // 5th: 55 //85th: 55
    console.log('E: ', hunger);

    const result = [
      { A:  75 },
      { B:  0 },
      { C:  75 },
      { D:  80 },
      { A:  55 },
      { B:  0 } ,     
      { C:  55 },
      { E:  55 }
    ];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseJ() {
    let sandwich = 'ketchup sandwich';

    // Log A: sandwich // 1st: ketchup sandwich
    console.log('A: ', sandwich);

    const addChipotle = () => {
      // Log B: toppings // 3rd: undefined
      console.log('B: ', toppings);

      var toppings = 'chipotle sauce';

      if (toppings === 'chipotle sauce') { 
        sandwich = 'not a mediocre sandwich';
      }

      // Log C: sandwich // 4th: not a mediocre sandwich
      console.log('C: ', sandwich);
    };

    const addCheese = () => {
      let cheeseTopping = 'gouda';
      // Log D: cheeseTopping // 2nd: gouda
      console.log('D: ', cheeseTopping);

      const shesTheManReference = () => {
        amandaBynes = 'National Treasure';
      };

      shesTheManReference();
    };

    cheeseTopping = 'kraft';
    addCheese();

    addChipotle();
    // Log E: sandwich // 5th: not a mediocre sandwich
    console.log('E: ', sandwich);
    // Log F: amandaBynes // 6th: National Treasure
    console.log('F: ', amandaBynes);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseK() {
    let num = 10;

    function foo() {
      if (num > 5) {
        num = 7;
      }
      // Log A: num // 1st: 7
      console.log('A: ', num);
    }

    foo();

    // Log B: num // 2nd: 7
    console.log('B: ', num);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseL() {
    let grade = 100;

    function losePoints() {
      grade = 90;

      function addPoints() {
        const grade = 95;

        if (grade === 95) {
          let grade = 97;
        }

        // Log A: grade // 1st: 95
        console.log('A: ', grade);
      }

      addPoints();

      // Log B: grade // 2nd: 90
      console.log('B: ', grade);

    }

    losePoints();

    // Log C: grade // 3rd: 90
    console.log('C: ', grade);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseM() {
    var num = 5;

    function first() {
      // Log A: num // 1st: 5
      console.log('A: ', num);
      num = 6;
      // Log B: num // 2nd: 6
      console.log('B: ', num);
    }

    function second() {
      // Log C: num // 3rd: reference error
      console.log('C: ', num);
      let num = 7;
    }

    first();
    second();

    // Log D: num // 4th: 6
    console.log('D: ', num);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseN() {
    var instructor = 'Pam';

    function changeInstructor() {

      // Log A: instructor

      if (instructor === 'Brittany') {
        const instructor = 'Nathaniel';
      } else {
        let instructor = 'Brittany';
      }

      // Log B: instructor

      function rename() {
        instructor = 'Louisa';
        // Log C: instructor
      }

      rename();

      // Log D: instructor

    }

    // Log E: instructor

    changeInstructor();

    // Log F: instructor

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseO() {
    var shoe = 'flipflop';

    function putOnShoe() {
      // Log A: shoe
      var shoe = 'boot';
    }

    // Log B: shoe
    putOnShoe();
    // Log C: shoe

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseP() {
    let lunch;
    function orderLunch() {
      if (lunch) {
        // Log A: lunch
        let lunch = 'sandwich';
      }

      if (typeof lunch === 'undefined') {
        lunch = 'soup';
      }

      // Log B: lunch
    }

    orderLunch();

    // Log C: lunch

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseQ(){
    let myKid = 'Pandora';
    let wildKids = ['Antigone'];

    let myCrazyKidAntics = kid => {
      // Log A: kid
      wildKids.push(kid);
      // Log B: wildKids
  
      let drawOnTheWall = () => {
        let myKid = 'Mandy';
        // Log C: myKid
        return `That wild kid ${myKid}, drew on the wall!`;
      };

      drawOnTheWall();

      let myAmazingKid = () => {
        let myKid = wildKids.shift();
        // Log D: myKid
        return `That kid ${myKid}, is AMAZING!`;
      };

      myAmazingKid();
      // Log E: myKid;
      return `All these kids are wild, especially, ${myKid}!`;
    };

    myCrazyKidAntics(myKid);

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  exerciseR() {
    let myName = 'Rody';
    // Log A: myName

    const parentFunc = () => {
      myName += 'Toy';
      // Log B: myName

      let innerFunc = () => {
        let myName = 'Tesla'; 
        // Log C: myName
      };

      innerFunc();
      myName += 'Daniels';
    };

    parentFunc();
    // Log D: myName

    const result = 'REPLACE WITH YOUR RESULT HERE';
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = scope;