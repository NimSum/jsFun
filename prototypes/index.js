const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');
const { dinosaurs, humans, movies } = require('./datasets/dinosaurs');




// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']
    const result = kitties.filter(cat => cat.color === 'orange');
    return result.map(cat => cat.name);

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => a.age - b.age).reverse();
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]
    const result = kitties.map(cat => {
      cat.age += 2;
      return cat;
    });
    return result;
  }
};





// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }
    const allNames = clubs.map(obj => obj.members);
    const namesArr = new Set(allNames.reduce((acc, elem) => acc.concat(elem)));
    const result = {};
    namesArr.forEach(name => {
      result[name] = [];
      clubs.forEach(club => {
        if (club.members.includes(name)) {
          result[name].push(club.club);
        }
      });
    });
    return result;
    // Annotation:
    // Write your annotation here as a comment

    ///ALTERNATIVE USING REDUCE;
    // const result = clubs.reduce((obj, el) => {
    //   el.members.forEach(member => {
    //     obj[member] = [];
    //   })
    //   return obj;
    // }, {});
    // clubs.forEach(club => {
    //   Object.keys(result).forEach(person => {
    //     if (club.members.includes(person)) {
    //       result[person].push(club.club);
    //     }
    //   })
    // }) 
    // return result;
  }
};




// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = [];
    mods.forEach(mod => {
      let total = mod.students/mod.instructors;
      result.push({mod: mod.mod, studentsPerInstructor: total});
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = [];
    cakes.forEach(cake => {
      result.push({ flavor: cake.cakeFlavor, inStock: cake.inStock });
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter(cake => cake.inStock > 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
  
  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((accum, cake) => {
      return accum += cake.inStock;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]
    const toppings = [];
    cakes.forEach(cake => cake.toppings.forEach(topping => toppings.push(topping)));
    const result = [...new Set(toppings)];
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }
    const toppings = [];
    const result = {};
    cakes.forEach(cake => cake.toppings.forEach(topping => toppings.push(topping)));
    const cleanList = [...new Set(toppings)];
    const countToppings = (topping) => toppings.filter(item => item === topping).length;
    cleanList.forEach(topping => result[topping] = countToppings(topping));
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter(room => room.program === 'FE');
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }
    const getRooms = (program) => classrooms.filter(room => room.program === program);
    const totalCaps = (nums) => nums.map(room => room.capacity).reduce((total, elem) => total += elem);
    const result = {
      feCapacity: totalCaps(getRooms('FE')),
      beCapacity: totalCaps(getRooms('BE'))
    };
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => a.capacity - b.capacity);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.map(place => place.beers.length).reduce((acc, el) => acc += el);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map(place => {
      return { name: place.name, beerCount: place.beers.length };
    });
    return result;

    // Annotation:
    // Write  your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const allBeers = breweries.map(place => place.beers).reduce((acc, el) => acc.concat(el));
    const result = allBeers.sort((b1, b2) => b2.abv - b1.abv);
    return result[0];

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map(teacher => {
      let cohort = cohorts.find(cohort => cohort.module === teacher.module);
      return { name: teacher.name, studentCount: cohort.studentCount };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }
    const countInstructors = (mod) => instructors.filter(teacher => teacher.module === mod).length;
    const result = {};
    cohorts.map(cohort => {
      result[`cohort${cohort.cohort}`] = cohort.studentCount / countInstructors(cohort.module);
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // {
    //     Pam: [2, 4],
    //     Brittany: [2, 4],
    //     Nathaniel: [2, 4],
    //     Robbie: [4],
    //     Leta: [2, 4],
    //     Travis: [1, 2, 3, 4],
    //     Louisa: [1, 2, 3, 4],
    //     Christie: [1, 2, 3, 4],
    //     Will: [1, 2, 3, 4]
    //   }
    const findCohorts = (skill) => cohorts.filter(cohort => {
      return cohort.curriculum.includes(skill);
    });
    const result = {};
    instructors.forEach(teacher => {
      result[teacher.name] = [];
      teacher.teaches.forEach(skill => {
        let mods = findCohorts(skill).map(cohort => cohort.module);
        result[teacher.name].push(...mods);
      });
      result[teacher.name] = result[teacher.name].filter((el, i, arr) => i === arr.indexOf(el)).sort();
      //  = [...new Set(result[teacher.name])].sort();
    });
    return result;

    // Annotation:
    // loop through instructors, then loop through their skills
    // for every skill, looop inside curriculum inside cohorts arr
    // if a match, push the module inside instructor property value;
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }
    let unfilteredCurriculums = [];
    cohorts.forEach(cohort => unfilteredCurriculums.push(...cohort.curriculum));
    const allCurriculums = [...new Set(unfilteredCurriculums)];
    const result = {};
    allCurriculums.forEach(topic => {
      result[topic] = [];
      instructors.forEach(teacher => {
        if(teacher.teaches.includes(topic)) {
          result[topic].push(teacher.name);
        }
      });
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const bossAndSideKicks = {};
    const result = [];
    let bossNames = Object.keys(bosses);

    const capBossName = (name) => name.charAt(0).toUpperCase() + name.slice(1);
    
    const calculateLoyalty = (boss) => {
      const loyaltyNums = sidekicks.map(char => {
        if (char.boss === capBossName(boss)) {
          return char.loyaltyToBoss;
        } else return null;
      });
      return loyaltyNums.reduce((a, b) => a += b);
    };

    bossNames.forEach(boss => {
      result.push( {
        bossName : capBossName(boss),
        sidekickLoyalty : calculateLoyalty(boss)
      } );
    });

    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]
    
    const constellationKeys = Object.keys(constellations);
    const constellationNames = [];
    constellationKeys.forEach(name => constellationNames.push(...constellations[name].stars));
    const result = [];
    stars.forEach(star => {
      if (constellationNames.includes(star.name)) {
        result.push(star);
      }
    });
    return result;
    // create empty array
    // create a names Set array and target constellation using dot notation
    // if a match, push that star into a new array

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = {};
    stars.forEach(star => {
      result[star.color] = [];
      stars.forEach(obj => {
        if (obj.color === star.color) {
          result[star.color].push(obj);
        }
      });
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    
    //  [ "Canis Major",
    //    "Carina",
    //    "Boötes",
    //    "Auriga",
    //    "Orion",
    //    "Lyra", 
    //    "Canis Minor", 
    //    "The Plow", 
    //    "Orion", 
    //    "The Little Dipper" ]

    let filtered = stars.filter(star => star.constellation !== '');
    filtered.sort((starA, starB) => starA.visualMagnitude - starB.visualMagnitude);
    const result = filtered.map(star => star.constellation);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113
    const getWeaponDamage = (weapon) => {
      return weapons[weapon].damage;
    };
    let result = 0;
    characters.forEach(char => {
      char.weapons.forEach(weapon => result += getWeaponDamage(weapon));
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = [];
    const getWeaponStats = (weapon) => {
      return weapons[weapon];
    };
    characters.forEach(char => {
      let charContainer = {};
      charContainer[char.name] = {damage: 0, range: 0};
      char.weapons.forEach(weapon => {
        let currWeaponStats = getWeaponStats(weapon);
        charContainer[char.name].damage += currWeaponStats.damage;
        charContainer[char.name].range += currWeaponStats.range;
      });
      result.push(charContainer);
    });
    return result;
    
    // Annotation:
    // Write your annotation here as a comment
  },
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: dinosaurs, humans, movies from ./datasets/dinosaurs
const dinosaurPrompts = {
  countAwesomeDinosaurs() {
    // Return an object where each key is a movie title and each value is the 
    // number of awesome dinosaurs in that movie. e.g.:
    // {
    //   'Jurassic Park': 5,
    //   'The Lost World: Jurassic Park': 8,
    //   'Jurassic Park III': 9,
    //   'Jurassic World': 11,
    //   'Jurassic World: Fallen Kingdom': 18
    // }
    // const movieTitles = movies.map(movie => movie.title);
    const awesomeDinos = [];
    Object.keys(dinosaurs).forEach(dino => {
      if (dinosaurs[dino].isAwesome === true) {
        awesomeDinos.push(dino);
      }
    });

    const result = {};
    movies.forEach(movie => {
      result[movie.title] = 0;
      movie.dinos.forEach(dino => {
        if (awesomeDinos.includes(dino)) {
          result[movie.title]++;
        }
      });
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  averageAgePerMovie() {
    /* Return an object where each key is a movie director's name and each value is
        an object whose key is a movie's title and whose value is the average age
        of the cast on the release year of that movie.
      e.g.:
      { 
        'Steven Spielberg': 
          { 
            'Jurassic Park': 34,
            'The Lost World: Jurassic Park': 37 
          },
        'Joe Johnston': 
          { 
            'Jurassic Park III': 44 
          },
        'Colin Trevorrow': 
          { 
            'Jurassic World': 56
           },
        'J. A. Bayona': 
          { 
            'Jurassic World: Fallen Kingdom': 59 
          } 
      }
    */

    // const result = {};
    // const getCastAgeAv = (title) => {
    //   let movieFound = movies.find(movie => movie.title === title);
    //   let { cast, yearReleased } = movieFound;
    //   let ageArray = []; 
    //   cast.forEach(actor => { //use reduce maybe??
    //     ageArray.push(yearReleased - humans[actor].yearBorn);
    //   });
    //   let agesTotal = ageArray.reduce((acc, el) => acc += el);
    //   return Math.floor(agesTotal/ageArray.length);
    // };
    // movies.forEach(movie => result[movie.director] = {});
    // Object.keys(result).forEach(director => {
    //   movies.forEach(movie => {
    //     if(movie.director === director) {
    //       result[director][movie.title] = getCastAgeAv(movie.title);
    //     }
    //   });
    // });
    const getCastAgeAv = (title) => {
      let { cast, yearReleased } = movies.find(movie => movie.title === title);
      let ageArray = cast.map(actor => yearReleased - humans[actor].yearBorn);
      let agesTotal = ageArray.reduce((acc, el) => acc += el);
      return Math.floor(agesTotal/ageArray.length);
    }

    const result = movies.reduce((acc, el) => {
      if (!acc[el.director]) {
        acc[el.director] = {};
      };
      acc[el.director][el.title] = getCastAgeAv(el.title);
      return acc;
    }, {});

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  uncastActors() {
    /*
    Return an array of objects that contain the names of humans who have not been cast in a Jurassic Park movie (yet), their nationality, and their imdbStarMeterRating. The object in the array should be sorted alphabetically by nationality.

    e.g.
      [{
        name: 'Justin Duncan',
        nationality: 'Alien',
        imdbStarMeterRating: 0
      }, 
      {
        name: 'Karin Ohman',
        nationality: 'Chinese',
        imdbStarMeterRating: 0
      },
      {
        name: 'Tom Wilhoit',
        nationality: 'Kiwi',
        imdbStarMeterRating: 1
      }, {
        name: 'Jeo D',
        nationality: 'Martian',
        imdbStarMeterRating: 0
      }]
    */

    const castedActors = [];
    const result = [];
    movies.forEach(movie => castedActors.push(...movie.cast));
    Object.keys(humans).forEach(actor => {
      if (!castedActors.includes(actor)) {
        result.push({
          name: actor,
          nationality: humans[actor].nationality,
          imdbStarMeterRating: humans[actor].imdbStarMeterRating
        });
      }
    });
    result.sort((el1, el2) => {
      let actor1 = el1.nationality.toUpperCase();
      let actor2 = el2.nationality.toUpperCase();
      return actor1.localeCompare(actor2);
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  actorsAgesInMovies() {
    /*
    Return an array of objects for each human and the age(s) they were in the movie(s) they were 
    cast in, as an array of age(s). Only include humans who were cast in at least one movie.

    e.g.
    [ { name: 'Sam Neill', ages: [ 46, 54 ] },
      { name: 'Laura Dern', ages: [ 26, 34 ] },
      { name: 'Jeff Goldblum', ages: [ 41, 45, 63, 66 ] },
      { name: 'Richard Attenborough', ages: [ 70, 74, 92, 95 ] },
      { name: 'Ariana Richards', ages: [ 14, 18 ] },
      { name: 'Joseph Mazello', ages: [ 10, 14 ] },
      { name: 'BD Wong', ages: [ 33, 55, 58 ] },
      { name: 'Chris Pratt', ages: [ 36, 39 ] },
      { name: 'Bryce Dallas Howard', ages: [ 34, 37 ] } ]
    */

    const result = [];
    const calcAge = (actor, movie) => {
      return movie.yearReleased - humans[actor].yearBorn;
    };
    Object.keys(humans).forEach(actor => {
      const starredIn = movies.filter(movie => movie.cast.includes(actor));
      if(starredIn[0]) {
        let ages = [];
        starredIn.forEach(mov => ages.push(calcAge(actor, mov)));
        result.push({ name: actor, ages: ages });
      }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts,
  dinosaurPrompts
};