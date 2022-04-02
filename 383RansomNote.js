/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magDb = new Map();

  for (i = 0; i < magazine.length; i++) {
    // build a map with available characters
    const c = magazine[i];
    let count = magDb.get(c);
    if (!count) {
      count = 1;
    } else {
      count++;
    }
    magDb.set(c, count);
  }

  // use map
  for (i = 0; i < ransomNote.length; i++) {
    const c = ransomNote[i];
    let count = magDb.get(c);
    if (count === undefined || count === 0) {
      return false;
    }
    count--;
    magDb.set(c, count);
  }

  return true;
};

module.exports = canConstruct;
