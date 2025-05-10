/* exported getInitialsOfPerson */
function getInitialsOfPerson(person: Record<string, any>): string {
  const first: string = person.firstName[0];
  const last: string = person.lastName[0];
  return first + last;
}
