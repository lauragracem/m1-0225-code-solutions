'use strict';
/* exported getStudentNames */
function getStudentNames(students) {
  const res = [];
  for (const key in students) {
    res.push(students[key].name);
  }
  return res;
}
