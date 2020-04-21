"use strict";

var _conversation = _interopRequireDefault(require("../../__test__/fixtures/conversation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("conversation", () => {
  it("must have an id", () => {
    const conversation = (0, _conversation.default)({
      Id: null
    });
    expect(true).toThrow("Test");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHNTT0xJRC9jb252ZXJzYXRpb24vY29udmVyc2F0aW9uLnRlc3QuanMiXSwibmFtZXMiOlsiZGVzY3JpYmUiLCJpdCIsImNvbnZlcnNhdGlvbiIsIklkIiwiZXhwZWN0IiwidG9UaHJvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBQSxRQUFRLENBQUMsY0FBRCxFQUFpQixNQUFNO0FBQzdCQyxFQUFBQSxFQUFFLENBQUMsaUJBQUQsRUFBb0IsTUFBTTtBQUMxQixVQUFNQyxZQUFZLEdBQUcsMkJBQXFCO0FBQUVDLE1BQUFBLEVBQUUsRUFBRTtBQUFOLEtBQXJCLENBQXJCO0FBQ0FDLElBQUFBLE1BQU0sQ0FBQyxJQUFELENBQU4sQ0FBYUMsT0FBYixDQUFxQixNQUFyQjtBQUNELEdBSEMsQ0FBRjtBQUlELENBTE8sQ0FBUiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtYWtlRmFrZUNvbnZlcnNhdGlvbiBmcm9tIFwiLi4vLi4vX190ZXN0X18vZml4dHVyZXMvY29udmVyc2F0aW9uXCI7XG5cbmRlc2NyaWJlKFwiY29udmVyc2F0aW9uXCIsICgpID0+IHtcbiAgaXQoXCJtdXN0IGhhdmUgYW4gaWRcIiwgKCkgPT4ge1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IG1ha2VGYWtlQ29udmVyc2F0aW9uKHsgSWQ6IG51bGwgfSk7XG4gICAgZXhwZWN0KHRydWUpLnRvVGhyb3coXCJUZXN0XCIpO1xuICB9KTtcbn0pO1xuIl19