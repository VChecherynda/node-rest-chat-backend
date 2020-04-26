"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderPromiseAsJson = void 0;

const renderPromiseAsJson = (res, status, promise) => {
  return promise.then(data => {
    res.status(status).json({
      data
    });
  });
};

exports.renderPromiseAsJson = renderPromiseAsJson;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9oZWxwZXIuanMiXSwibmFtZXMiOlsicmVuZGVyUHJvbWlzZUFzSnNvbiIsInJlcyIsInN0YXR1cyIsInByb21pc2UiLCJ0aGVuIiwiZGF0YSIsImpzb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsR0FBRyxDQUFDQyxHQUFELEVBQU1DLE1BQU4sRUFBY0MsT0FBZCxLQUEwQjtBQUMzRCxTQUFPQSxPQUFPLENBQUNDLElBQVIsQ0FBYUMsSUFBSSxJQUFJO0FBQzFCSixJQUFBQSxHQUFHLENBQUNDLE1BQUosQ0FBV0EsTUFBWCxFQUFtQkksSUFBbkIsQ0FBd0I7QUFBRUQsTUFBQUE7QUFBRixLQUF4QjtBQUNELEdBRk0sQ0FBUDtBQUdELENBSk0iLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcmVuZGVyUHJvbWlzZUFzSnNvbiA9IChyZXMsIHN0YXR1cywgcHJvbWlzZSkgPT4ge1xuICByZXR1cm4gcHJvbWlzZS50aGVuKGRhdGEgPT4ge1xuICAgIHJlcy5zdGF0dXMoc3RhdHVzKS5qc29uKHsgZGF0YSB9KTtcbiAgfSk7XG59O1xuIl19