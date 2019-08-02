// CODE here for your Lambda Classes

//         ===Classes===

// Person class
class Person {
    constructor(atts) {
        this.name = atts.name;
        this.age = atts.age;
        this.location = atts.location;
    }
    speak() {
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

// Instructor class
class Instructor extends Person {
    constructor(intrAttr){
        super(intrAttr);
        this.speciality = intrAttr.speciality,
        this.favLanguage = intrAttr.favLanguage,
        this.catchPhrase = intrAttr.catchPhrase
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
}

// Student class
class Student extends Person {
    constructor(atts) {
        super(atts);
        this.previousBackground = atts.previousBackground;
        this.className = atts.className;
        this.favSubjects = atts.favSubjects;
    }
    listsSubjects() {
       this.favSubjects.forEach(item => console.log(item));
    }
    PRAssignment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`);
    }
}

// Project Managers class
class ProjectManager extends Instructor {
    constructor(pmAttr){
        super(pmAttr);
        this.gradClassName = pmAttr.gradClassName,
        this.favInstructor = pmAttr.favInstructor
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//         ===Objects===
const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
});

const joe = new Instructor({
    name: 'Joe',
    location: 'Kyiv',
    age: 35,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Hi there`
});

const yurii = new Student({
    name: 'Yurii',
    location: 'Moscow',
    age: 28,
    favLanguage: 'JavaScript',
    specialty: 'Back-end',
    catchPhrase: `That's how it works`,
    previousBackground: 'No background',
    className: 'JS33',
    favSubjects: ['CSS','JavaScript','HTML']
});
const nata = new Student({
    name: 'Nata',
    location: 'Warsaw',
    age: 25,
    favLanguage: 'React',
    specialty: 'Back-end',
    catchPhrase: `A-ha`,
    favSubjects: 'JavaScript',
    previousBackground: 'HTMLacademy, Poland',
    className: 'JS34'
});
const ben = new ProjectManager({
    name: 'Ben',
    location: 'Chicago',
    age: 34,
    favLanguage: 'Phyton',
    specialty: 'Front-end',
    catchPhrase: `Just fix that`,
    gradClassName: 'CS1',
    favInstructor: 'Fred'
});
const serhio = new ProjectManager({
    name: 'Serhio',
    location: 'Berlin',
    age: 33,
    favLanguage: 'Java',
    specialty: 'Back-end',
    catchPhrase: `It's doesn't work`,
    gradClassName: 'CS2',
    favInstructor: 'Joe'
});


console.log(fred.name);
console.log(yurii.location);
console.log(ben.speciality);
joe.speak();
fred.demo('JavaScript');
fred.grade(nata,'CSS');
console.log(yurii.favSubjects);
yurii.listsSubjects();
nata.PRAssignment('HTML');
nata.sprintChallenge('Advanced CSS');
ben.standUp('workchannel');
serhio.debugsCode(yurii,'CSS');