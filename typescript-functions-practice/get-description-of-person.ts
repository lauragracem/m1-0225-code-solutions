/* exported getDescriptionOfPerson */
function getDescriptionOfPerson(person: Record<string, any>): string {
  return `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
}
