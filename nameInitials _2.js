/* This function should convert a name to initials. Here are few conditions to be met:
    1. A single worded name must return the first two letters of the word as initials. Eg. John should have an initial JO
    2. A two worded name must return the first letter of each of the word in the name. Eg. John Doe should have an initial JD
    3. A name with more words should return the starting letter of the first and the last word as initial. Eg. John Doe Honai should have an initial JH
    4. The function should return all initials in uppercase.
*/

// let Name = "John";
let Name = "John Doe";
// let Name = "John Doe Williams";

function createInitialsFromName(name) {
  let Fullname = name.split(" ");
  let initials = "";

  for (let i = 0; i < Fullname.length; i++) {
    if (Fullname.length === 1) {
      initials += Fullname[i].slice(0, 2);
    } else if (Fullname.length === 2) {
      initials += Fullname[i][0];
    } else if (Fullname.length > 2) {
      initials += Fullname[0][0] + Fullname[Fullname.length - 1][0];
      break;
    }
  }
  return initials.toUpperCase();
}

createInitialsFromName(Name);

module.exports = createInitialsFromName;
