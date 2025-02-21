'use strict';
/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  const first = person.firstName[0];
  const last = person.lastName[0];
  return first + last;
}
