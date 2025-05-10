/* exported getFirstInitialOfPerson */
function getFirstInitialOfPerson(person: Record<string, any>): string {
  const first: string = person.firstName[0];
  return first;
}
