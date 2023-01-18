// #1: Make a class called School.  The constructor should create the following properties: name, size, minGrade, maxGrade, city

class School {
  constructor(name, size, minGrade, maxGrade, city) {
    this.name = name;
    this.size = size;
    this.minGrade = minGrade;
    this.maxGrade = maxGrade;
    this.city = city;
  }

  compareSize(otherSchool, size) {
    if (this.size < size) {
      console.log("That school is bigger.");
    } else {
      console.log("That school is smaller");
    }
  }
}

//#2: Add a function to the class called compareSize.  The compare size function should have 2 parameters: otherSchool and size.  Inside the function, there should be a conditional that checks if this.size < size.  If this.size < size is true, the function should log "That school is bigger".  Otherwise, it should log "That school is smaller."



//#3: Create a variable called testSchool.  The variable should store a new object using the School class.  You can make up a name, size, etc. for this School.

var testSchool = new School("Special School", 456, "K", 12, "New York")
console.log(testSchool)

//#4: Run compareSize on testSchool to make sure it works.

testSchool.compareSize("Other School", 1112)

//#5: Create a class called PublicSchool that extends School.  It should have access to all the properties and functions of School, plus two additional properties: this.charter and this.magnet (which will be booleans).  Test to make sure this new PublicSchool class works by creating a testSchool2 variable and storing an object in it.

class PublicSchool extends School {
  constructor(name, size, minGrade, maxGrade, city, charter, magnet) {
    super(name, size, minGrade, maxGrade, city);
    this.charter = charter;
    this.magnet = magnet;
  }
}

var testSchool2 = new PublicSchool("Cool School", 678, 9, 12, "Houston", true, false)
console.log(testSchool2)

//#6: Create a class called PrivateSchool that extends School.  It should have access to all the properties and functions of School, plus three additional properties: this.tuition, this.boarding, and this.magnet.  Test to make sure this new PrivateSchool class works by creating a testSchool3 variable and storing an object in it.

class PrivateSchool extends School {
  constructor(
    name, size, minGrade, maxGrade, city, tuition, boarding, religious
  ) {
    super(name, size, minGrade, maxGrade, city);
    this.tuition = tuition;
    this.boarding = boarding;
    this.religious = religious;
  }

  calcRealTuitionFromIncome(income) {
    var realTuition = null;
    if (income > 250000) {
      realTuition = this.tuition;
    }
    if (income <= 250000 && income > 150000) {
      realTuition = this.tuition * 0.7;
    }
    if (income <= 150000) {
      realTuition = this.tuition * 0.3;
    }
    return realTuition;
  }
}

var testSchool3 = new PrivateSchool("Hip School", 123, 9, 12, "Austin", 12332, false, false)
console.log(testSchool3)

//#7: Add a function called calcRealTuitionFromIncome to the PrivateSchool class.  The function should have a parameter called income.  If income > 250000, then the function should just return the regular tuition.  If income <= 250000 and income > 150000, the function should return 70% of the tuition.  If income <= 150000, the function should return 30% of the tuition.



//Run this new function on testSchool3 to make sure that it works.

console.log(testSchool3.calcRealTuitionFromIncome(300000))

//#8: Here is an array of pretend school names:

var schoolNames = [
  "Deer Valley",
  "Laguna Bay",
  "Oak Park",
  "Spring Gardens",
  "Littlewood",
  "Hawking",
  "Greenfield",
  "Bear River",
  "Elk Creek",
  "Golden Oak",
  "Summit Technical",
  "Maple Hills",
  "Elk Creek",
  "Oak Hills",
  "Pinewood",
  "Summerfield",
  "Mountainridge",
  "Waterford",
];

// And here is an empty array:

var schoolObjects = [];

// Loop through the schoolNames array.  For each school name, use the regular School class to create a new object.  The "name" property of each new object should be one of the names from the schoolNames array.  The minGrade property of each object should be "K".  The maxGrade property of each object should be a random number from 4 to 12.  The size of each object should be a random number from 200 to 1000.  The city of each object should be "Pleasantville."

// After each object is created, push the object to the schoolObjects array.  Then log the schoolObjects array to the console.

for (var i = 0; i < schoolNames.length; i++){
  var schoolName = schoolNames[i]
  var min = "K"
  var max = randomIntFromInterval(4, 12)
  var s = randomIntFromInterval(200, 1000)
  var c = "Pleasantville"

  var newObj = new School(schoolName, s, min, max, c)

  schoolObjects.push(newObj)
}
console.log(schoolObjects)



function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
















// for (var i = 0; i < schoolNames.length; i++){

//   schoolObjects.push(new School(schoolNames[i], randomIntFromInterval(200, 1000), "K", randomIntFromInterval(4, 12), "Pleasantville"))


// }
// console.log(schoolObjects)