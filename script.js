
// Student Records Manager


// 1. Create an array of students
const students = [
{
name: "John",
age: 20,
course: "Computer Science",
score: 85
},
{
name: "David",
age: 22,
course: "Web Development",
score: 72
},
{
name: "Mary",
age: 19,
course: "Software Engineering",
score: 65
},
{
name: "Peter",
age: 21,
course: "Data Science",
score: 45
},
{
name: "Grace",
age: 23,
course: "Cybersecurity",
score: 90
}
];

// 2. Function to return a letter grade
function getGrade(score) {
if (score >= 70) {
return "A";
} else if (score >= 60) {
return "B";
} else if (score >= 50) {
return "C";
} else {
return "F";
}
}

// 3. Function to display student information
function displayStudent(student) {
console.log(
    `${student.name} (${student.age}) is studying ${student.course} and scored ${student.score} - Grade ${getGrade(student.score)}`
);
}

// 4. Use forEach to display every student
students.forEach(displayStudent);

// 5. Use filter to get students who passed
const passedStudents = students.filter(student => student.score >= 50);

console.log("Students who passed:");
console.log(passedStudents);

// 6. Use map to get all student names
const studentNames = students.map(student => student.name);

console.log("Student names:");
console.log(studentNames);

// 7. BONUS: Function to calculate average score
function averageScore(students) {
const total = students.reduce((sum, student) => sum + student.score, 0);
return total / students.length;
}

console.log("Average score:", averageScore(students));