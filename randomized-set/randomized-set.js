var RandomizedSet = function () {
  this.values = [];
  this.map = {};
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (this.map[val]) {
    return false;
  }
  this.values.push(val);
  this.map[val] = true;
  return true;
};

/**
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (!this.map[val]) {
    return false;
  }

  for (let i = 0; i < this.values.length; i++) {
    if (this.values[i] === val) {
      this.map[val] = false;
      this.values.splice(i, 1);
      return true;
    }
  }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomItem = Math.floor(Math.random() * this.values.length);

  return this.values[randomItem];
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

module.exports = RandomizedSet;
