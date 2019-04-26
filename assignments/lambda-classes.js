class Person {
  constructor(obj) {
    this.name = obj.name;
    this.age = obj.age;
    this.location = obj.location;
    this.gender = obj.gender;
  }
  speak() {
    console.log(`Hello, my name is ${this.name}. I am from ${this.location}`);
  }
}

class Instructor extends Person {
  constructor(obj) {
    super(obj);
    this.speciality = obj.speciality;
    this.favLanguage = obj.favLanguage;
    this.catchPhrase = obj.catchPhrase;
  }
  demo(subj) {
    console.log(`Today we are learning about ${subj}.`);
  }
  grade(student, subj) {
    console.log(`${student} recives a perfect score on ${subj}!`);
  }
}

class Student extends Person {
  constructor(obj) {
    super(obj);
    this.previousBackground = obj.previousBackground;
    this.className = obj.className;
    this.favSubjects = obj.favSubjects;
  }
  listsSubjects() {
    this.favSubjects.forEach(function(subj) {
      console.log(subj);
    });
  }
  PRAssignment(subj) {
    console.log(`${this.name} has submitted a PR for ${subj}.`);
  }
  sprintChalenge(subj) {
    console.log(`${this.name} has begun spriint challenge on ${subj}.`);
  }
}
class ProjectManager extends Instructor {
  constructor(obj) {
    super(obj);
    this.gradClassName = obj.gradClassName;
    this.favInstructor = obj.favInstructor;
  }
  standUp(channel) {
    console.log(`${this.name} announces to ${channel},@channel standy times`);
  }
  debugsCode(student, subj) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subj}.`);
  }
}

const fred = new Instructor({
  name: "Fred",
  location: "Bedrock",
  age: 37,
  gender: "male",
  favLanguage: "JavaScript",
  specialty: "Front-end",
  catchPhrase: `Don't forget the homies`
});

const snoopDogg = new Student({
  name: "Snoop Dogg",
  location: "California",
  age: 47,
  previousBackground: "rapper",
  className: "high420",
  favSubjects: ["music","weed","football"],
});

const capNcrunch = new ProjectManager({
  name: "Crunch",
  location: "Aisle 12",
  age: 56,
  gender: "male",
  gradClassName:"breakfast19",
  faveInstructor: "Tony the Tiger",
});

fred.demo("java");
snoopDogg.listsSubjects();
capNcrunch.debugsCode(snoopDogg,"java");