let student = {
  id: 133,
  name: "John Doe",
  level: "Freshman",
  course: "English",
  getGrade: function (x) {
    let val = parseInt(x);
    if (val > 100 || val < 0) {
      return "Enter values between 0 and 100";
    } else if (val >= 90) {
      return "A";
    } else if (val >= 80) {
      return "B";
    } else if (val >= 70) {
      return "C";
    } else if (val >= 60) {
      return "D";
    } else if (val >= 0 && val < 60) {
      return "F";
    } else {
      return "Unknown";
    }
  },
};

let newStudent = student;
newStudent.grade = newStudent.getGrade(95);
console.log(newStudent);
