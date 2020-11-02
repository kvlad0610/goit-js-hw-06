import users from './users.js';
// Write code under this line
const getSortedUniqueSkills = (array) => array
  .reduce((acc, arr) => acc.concat(...arr.skills), [])
  .filter((skills, i, arr) => arr.indexOf(skills) === i)
  .sort();

 console.log(getSortedUniqueSkills(users));
/* [ 'adipisicing', 'amet',
 'anim', 'commodo',
 'culpa', 'elit',
 'ex', 'ipsum',
 'irure', 'laborum',
 'lorem', 'mollit',
 'non', 'nostrud',
 'nulla', 'proident',
 'tempor', 'velit',
 'veniam' ]; */
