"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = makeMessageDb;

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function makeMessageDb(_ref) {
  var makeDb = _ref.makeDb;

  function findOne() {
    return _findOne.apply(this, arguments);
  }

  function _findOne() {
    _findOne = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var _ref2,
          _ref2$userTwoId,
          userTwoId,
          db,
          query,
          result,
          id,
          _args = arguments;

      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _ref2 = _args.length > 0 && _args[0] !== undefined ? _args[0] : {}, _ref2$userTwoId = _ref2.userTwoId, userTwoId = _ref2$userTwoId === void 0 ? "" : _ref2$userTwoId;
              _context.next = 3;
              return makeDb();

            case 3:
              db = _context.sent;
              query = {
                where: {
                  userTwoId: Number(userTwoId)
                },
                attributes: ["id", "userOneId", "userTwoId"]
              };
              _context.next = 7;
              return db.collection("conversations").findOne(query);

            case 7:
              result = _context.sent;
              id = result.id;
              return _context.abrupt("return", {
                id: id
              });

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _findOne.apply(this, arguments);
  }

  function findAll() {
    return _findAll.apply(this, arguments);
  }

  function _findAll() {
    _findAll = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
      var db, query, result;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return makeDb();

            case 2:
              db = _context2.sent;
              query = {
                attributes: ["id", "userOneId", "userTwoId"]
              };
              _context2.next = 6;
              return db.collection("conversations").findAll(query);

            case 6:
              result = _context2.sent;
              return _context2.abrupt("return", result);

            case 8:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _findAll.apply(this, arguments);
  }

  return Object.freeze({
    findOne: findOne,
    findAll: findAll
  });
}