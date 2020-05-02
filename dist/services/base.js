"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class Base {
  run(data) {
    return this.validate(data).then(cleanData => {
      console.log("[cleanData]", cleanData);
      return this.execute(cleanData);
    }).catch(err => {
      console.log("[err]", err);
      const error = this.validator.getErrors();
      throw {
        status: 403,
        data: error
      };
    });
  }

}

exports.default = Base;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zZXJ2aWNlcy9iYXNlLmpzIl0sIm5hbWVzIjpbIkJhc2UiLCJydW4iLCJkYXRhIiwidmFsaWRhdGUiLCJ0aGVuIiwiY2xlYW5EYXRhIiwiY29uc29sZSIsImxvZyIsImV4ZWN1dGUiLCJjYXRjaCIsImVyciIsImVycm9yIiwidmFsaWRhdG9yIiwiZ2V0RXJyb3JzIiwic3RhdHVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQWUsTUFBTUEsSUFBTixDQUFXO0FBQ3hCQyxFQUFBQSxHQUFHLENBQUNDLElBQUQsRUFBTztBQUNSLFdBQU8sS0FBS0MsUUFBTCxDQUFjRCxJQUFkLEVBQ0pFLElBREksQ0FDQ0MsU0FBUyxJQUFJO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxhQUFaLEVBQTJCRixTQUEzQjtBQUNBLGFBQU8sS0FBS0csT0FBTCxDQUFhSCxTQUFiLENBQVA7QUFDRCxLQUpJLEVBS0pJLEtBTEksQ0FLRUMsR0FBRyxJQUFJO0FBQ1pKLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLE9BQVosRUFBcUJHLEdBQXJCO0FBQ0EsWUFBTUMsS0FBSyxHQUFHLEtBQUtDLFNBQUwsQ0FBZUMsU0FBZixFQUFkO0FBQ0EsWUFBTTtBQUFFQyxRQUFBQSxNQUFNLEVBQUUsR0FBVjtBQUFlWixRQUFBQSxJQUFJLEVBQUVTO0FBQXJCLE9BQU47QUFDRCxLQVRJLENBQVA7QUFVRDs7QUFadUIiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBCYXNlIHtcbiAgcnVuKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy52YWxpZGF0ZShkYXRhKVxuICAgICAgLnRoZW4oY2xlYW5EYXRhID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJbY2xlYW5EYXRhXVwiLCBjbGVhbkRhdGEpO1xuICAgICAgICByZXR1cm4gdGhpcy5leGVjdXRlKGNsZWFuRGF0YSk7XG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW2Vycl1cIiwgZXJyKTtcbiAgICAgICAgY29uc3QgZXJyb3IgPSB0aGlzLnZhbGlkYXRvci5nZXRFcnJvcnMoKTtcbiAgICAgICAgdGhyb3cgeyBzdGF0dXM6IDQwMywgZGF0YTogZXJyb3IgfTtcbiAgICAgIH0pO1xuICB9XG59XG4iXX0=