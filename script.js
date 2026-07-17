// ==========================================
// Part 1: Understanding and Creating Objects
// ==========================================

const student = {
    name: "Alex Rivera",
    age: 21,
    enrolled: true,
    courses: ["Introduction to JS", "Web Development 101", "Database Systems"],
    
    // Method to display basic info
    displayInfo() {
        return `Student ${this.name} is ${this.age} years old and is currently ${this.enrolled ? 'enrolled' : 'not enrolled'}.`;
    },

    // Part 5 Methods (Added here so they belong to the object)
    addCourse(newCourse) {
        this.courses.push(newCourse);
        console.log(`${newCourse} has been added.`);
    },

    getTotalCourses() {
        return this.courses.length;
    }
};

console.log("--- Part 1: Object Basics ---");
console.log("Name:", student.name);
console.log("Age:", student.age);
console.log(student.displayInfo());


// ==========================================
// Part 2: Working with JSON
// ==========================================

console.log("\n--- Part 2: Working with JSON ---");
// Convert object to JSON string
const studentJSON = JSON.stringify(student);
console.log("JSON String:", studentJSON);

// Convert JSON string back to JS object
const parsedStudent = JSON.parse(studentJSON);
console.log("Parsed Object:", parsedStudent);

// Comparing the structural data
console.log("Are names identical?", student.name === parsedStudent.name); 


// ==========================================
// Part 3: Using Destructuring Assignment
// ==========================================

console.log("\n--- Part 3: Destructuring ---");
// Object destructuring
const { name, courses } = student;
console.log("Destructured Name:", name);
console.log("Destructured Courses:", courses);

// Array destructuring
const scores = [85, 92, 78, 90];
const [firstScore, secondScore] = scores;
console.log("First Score:", firstScore);
console.log("Second Score:", secondScore);


// ==========================================
// Part 4: The Spread Operator
// ==========================================

console.log("\n--- Part 4: Spread Operator ---");
// Clone and add property
const clonedStudent = { ...student, graduationYear: 2027 };
console.log("Cloned Student with Graduation Year:", clonedStudent);

// Merge arrays
const newCourses = ["Advanced React", "UX/UI Design"];
const mergedCourses = [...student.courses, ...newCourses];
console.log("Merged Courses Array:", mergedCourses);


// ==========================================
// Part 5: Object Methods (Testing)
// ==========================================

console.log("\n--- Part 5: Object Methods ---");
student.addCourse("Cloud Computing");
console.log("Total Number of Courses:", student.getTotalCourses());


// ==========================================
// Bonus Task: Array Reduce
// ==========================================

console.log("\n--- Bonus Task: Reduce ---");
const totalScoreSum = scores.reduce((accumulator, currentScore) => accumulator + currentScore, 0);
const averageScore = totalScoreSum / scores.length;

console.log("Scores Array:", scores);
console.log("Average Score:", averageScore);