function inputStudentMark(x) {
  //x is a place holder for actual student's mark
  if (x > 100) {
    return "Null"; //ensures that it only grades marks less than 100
  } else if (x >= 80) {
    return "A";
  } else if (x >= 60) {
    return "B";
  } else if (x >= 50) {
    return "C";
  } else if (x >= 40) {
    return "D";
  } else if (x >= 0) {
    return "E";
  } else if (x < 0) {
    return "Null";
  }
}
console.log(inputStudentMark(60)); //this will return Null as the output intead of a grade.
