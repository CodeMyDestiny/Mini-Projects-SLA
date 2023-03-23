// Define the Student class
class Student {
	constructor(name, age, gender, course) {
		this.name = name;
		this.age = age;
		this.gender = gender;
		this.course = course;
	}

	// Method to display student details
	display() {
		return `Name: ${this.name}<br>Age: ${this.age}<br>Gender: ${this.gender}<br>Grade: ${this.course}<hr>`;
	}
}

// Create five student objects
let student1 = new Student("Dinesh", 25, "Male", "Web Development/React Js");
let student2 = new Student("Lavanya", 27, "Female", "Full Stack Development");
let student3 = new Student("Yokesh", 25, "Male", "Web Developmebt/React Js");
let student4 = new Student("Vinodha", 27, "Female", "Web Developmebt/React Js");
let student5 = new Student("Ganesh", 28, "Male", "Full Stack Development");

// Add the student details to the HTML page
let studentsDiv = document.getElementById("students");
studentsDiv.innerHTML += student1.display();
studentsDiv.innerHTML += student2.display();
studentsDiv.innerHTML += student3.display();
studentsDiv.innerHTML += student4.display();
studentsDiv.innerHTML += student5.display();
