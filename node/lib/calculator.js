"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.add = add;

function add(numbers) {
  return numbers.trim().split(',').map(x => parseInt(x)) // this wont support floats, and doesnt check for NaN
  .reduce((a, b) => a + b);
} // SOLUTIONS

/**
 * Split RegExp /[,\s;]/
 * parseFloat(x)
 * .filter(x => !isNaN(x))
 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJhZGQiLCJudW1iZXJzIiwidHJpbSIsInNwbGl0IiwibWFwIiwieCIsInBhcnNlSW50IiwicmVkdWNlIiwiYSIsImIiXSwic291cmNlcyI6WyIuLi9zcmMvY2FsY3VsYXRvci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gYWRkKG51bWJlcnM6IHN0cmluZykge1xuICByZXR1cm4gbnVtYmVyc1xuICAgIC50cmltKClcbiAgICAuc3BsaXQoJywnKVxuICAgIC5tYXAoKHgpID0+IHBhcnNlSW50KHgpKSAvLyB0aGlzIHdvbnQgc3VwcG9ydCBmbG9hdHMsIGFuZCBkb2VzbnQgY2hlY2sgZm9yIE5hTlxuICAgIC5yZWR1Y2UoKGEsIGIpID0+IGEgKyBiKVxufVxuXG4vLyBTT0xVVElPTlNcblxuLyoqXG4gKiBTcGxpdCBSZWdFeHAgL1ssXFxzO10vXG4gKiBwYXJzZUZsb2F0KHgpXG4gKiAuZmlsdGVyKHggPT4gIWlzTmFOKHgpKVxuICovXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxTQUFTQSxHQUFULENBQWFDLE9BQWIsRUFBOEI7RUFDbkMsT0FBT0EsT0FBTyxDQUNYQyxJQURJLEdBRUpDLEtBRkksQ0FFRSxHQUZGLEVBR0pDLEdBSEksQ0FHQ0MsQ0FBRCxJQUFPQyxRQUFRLENBQUNELENBQUQsQ0FIZixFQUdvQjtFQUhwQixDQUlKRSxNQUpJLENBSUcsQ0FBQ0MsQ0FBRCxFQUFJQyxDQUFKLEtBQVVELENBQUMsR0FBR0MsQ0FKakIsQ0FBUDtBQUtELEMsQ0FFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIn0=