"use strict";

var _message = _interopRequireDefault(require("../../__test__/fixtures/message"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe("message", () => {
  it("must have an id", () => {
    const message = (0, _message.default)({
      Id: null
    });
    expect(true).toThrow("Test");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9tb2RlbHNTT0xJRC9tZXNzYWdlL21lc3NhZ2UudGVzdC5qcyJdLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwibWVzc2FnZSIsIklkIiwiZXhwZWN0IiwidG9UaHJvdyJdLCJtYXBwaW5ncyI6Ijs7QUFBQTs7OztBQUVBQSxRQUFRLENBQUMsU0FBRCxFQUFZLE1BQU07QUFDeEJDLEVBQUFBLEVBQUUsQ0FBQyxpQkFBRCxFQUFvQixNQUFNO0FBQzFCLFVBQU1DLE9BQU8sR0FBRyxzQkFBZ0I7QUFBRUMsTUFBQUEsRUFBRSxFQUFFO0FBQU4sS0FBaEIsQ0FBaEI7QUFDQUMsSUFBQUEsTUFBTSxDQUFDLElBQUQsQ0FBTixDQUFhQyxPQUFiLENBQXFCLE1BQXJCO0FBQ0QsR0FIQyxDQUFGO0FBSUQsQ0FMTyxDQUFSIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1ha2VGYWtlTWVzc2FnZSBmcm9tIFwiLi4vLi4vX190ZXN0X18vZml4dHVyZXMvbWVzc2FnZVwiO1xuXG5kZXNjcmliZShcIm1lc3NhZ2VcIiwgKCkgPT4ge1xuICBpdChcIm11c3QgaGF2ZSBhbiBpZFwiLCAoKSA9PiB7XG4gICAgY29uc3QgbWVzc2FnZSA9IG1ha2VGYWtlTWVzc2FnZSh7IElkOiBudWxsIH0pO1xuICAgIGV4cGVjdCh0cnVlKS50b1Rocm93KFwiVGVzdFwiKTtcbiAgfSk7XG59KTtcbiJdfQ==