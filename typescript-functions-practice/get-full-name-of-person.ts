/* exported getFullNameOfPerson */
function getFullNameOfPerson(person: Record<string, any>): string {
  const fullName: string = person.firstName + ' ' + person.lastName;
  return fullName;
}
