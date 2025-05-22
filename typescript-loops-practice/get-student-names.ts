/* exported getStudentNames */
function getStudentNames(students: Record<string, any>): string[] {
  const res: string[] = [];
  for (const key in students) {
    res.push(students[key].name);
  }
  return res;
}
