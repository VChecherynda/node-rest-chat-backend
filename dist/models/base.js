"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _sequelize = _interopRequireDefault(require("sequelize"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class Base extends _sequelize.default.Model {
  static init(sequelize, options = {}) {
    super.init(this.schema, {
      sequelize,
      ...this.options
    });
  }

  static initRelationsAndHooks() {
    if (this.initRelations) this.initRelations();
    if (this.initHooks) this.initHooks();
  }

  static async findById(id, fields) {
    const query = {
      id,
      attributes: fields
    };
    const entity = await this.findOne(query);
    return entity;
  }

  static async findOneEntity(field, value) {
    const query = {
      where: {
        [field]: value
      }
    };
    const entity = await this.findOne(query);
    return entity;
  }

  static async findAllEntity(fields) {
    const query = {
      attributes: fields
    };
    const entity = await this.findAll(query);
    return entity;
  }

}

var _default = Base;
exports.default = _default;
module.exports = exports.default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYmFzZS5qcyJdLCJuYW1lcyI6WyJCYXNlIiwiU2VxdWVsaXplIiwiTW9kZWwiLCJpbml0Iiwic2VxdWVsaXplIiwib3B0aW9ucyIsInNjaGVtYSIsImluaXRSZWxhdGlvbnNBbmRIb29rcyIsImluaXRSZWxhdGlvbnMiLCJpbml0SG9va3MiLCJmaW5kQnlJZCIsImlkIiwiZmllbGRzIiwicXVlcnkiLCJhdHRyaWJ1dGVzIiwiZW50aXR5IiwiZmluZE9uZSIsImZpbmRPbmVFbnRpdHkiLCJmaWVsZCIsInZhbHVlIiwid2hlcmUiLCJmaW5kQWxsRW50aXR5IiwiZmluZEFsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBOzs7O0FBRUEsTUFBTUEsSUFBTixTQUFtQkMsbUJBQVVDLEtBQTdCLENBQW1DO0FBQ2pDLFNBQU9DLElBQVAsQ0FBWUMsU0FBWixFQUF1QkMsT0FBTyxHQUFHLEVBQWpDLEVBQXFDO0FBQ25DLFVBQU1GLElBQU4sQ0FBVyxLQUFLRyxNQUFoQixFQUF3QjtBQUFFRixNQUFBQSxTQUFGO0FBQWEsU0FBRyxLQUFLQztBQUFyQixLQUF4QjtBQUNEOztBQUVELFNBQU9FLHFCQUFQLEdBQStCO0FBQzdCLFFBQUksS0FBS0MsYUFBVCxFQUF3QixLQUFLQSxhQUFMO0FBQ3hCLFFBQUksS0FBS0MsU0FBVCxFQUFvQixLQUFLQSxTQUFMO0FBQ3JCOztBQUVELGVBQWFDLFFBQWIsQ0FBc0JDLEVBQXRCLEVBQTBCQyxNQUExQixFQUFrQztBQUNoQyxVQUFNQyxLQUFLLEdBQUc7QUFDWkYsTUFBQUEsRUFEWTtBQUVaRyxNQUFBQSxVQUFVLEVBQUVGO0FBRkEsS0FBZDtBQUtBLFVBQU1HLE1BQU0sR0FBRyxNQUFNLEtBQUtDLE9BQUwsQ0FBYUgsS0FBYixDQUFyQjtBQUVBLFdBQU9FLE1BQVA7QUFDRDs7QUFFRCxlQUFhRSxhQUFiLENBQTJCQyxLQUEzQixFQUFrQ0MsS0FBbEMsRUFBeUM7QUFDdkMsVUFBTU4sS0FBSyxHQUFHO0FBQ1pPLE1BQUFBLEtBQUssRUFBRTtBQUFFLFNBQUNGLEtBQUQsR0FBU0M7QUFBWDtBQURLLEtBQWQ7QUFJQSxVQUFNSixNQUFNLEdBQUcsTUFBTSxLQUFLQyxPQUFMLENBQWFILEtBQWIsQ0FBckI7QUFFQSxXQUFPRSxNQUFQO0FBQ0Q7O0FBRUQsZUFBYU0sYUFBYixDQUEyQlQsTUFBM0IsRUFBbUM7QUFDakMsVUFBTUMsS0FBSyxHQUFHO0FBQ1pDLE1BQUFBLFVBQVUsRUFBRUY7QUFEQSxLQUFkO0FBSUEsVUFBTUcsTUFBTSxHQUFHLE1BQU0sS0FBS08sT0FBTCxDQUFhVCxLQUFiLENBQXJCO0FBRUEsV0FBT0UsTUFBUDtBQUNEOztBQXZDZ0M7O2VBMENwQmYsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTZXF1ZWxpemUgZnJvbSBcInNlcXVlbGl6ZVwiO1xuXG5jbGFzcyBCYXNlIGV4dGVuZHMgU2VxdWVsaXplLk1vZGVsIHtcbiAgc3RhdGljIGluaXQoc2VxdWVsaXplLCBvcHRpb25zID0ge30pIHtcbiAgICBzdXBlci5pbml0KHRoaXMuc2NoZW1hLCB7IHNlcXVlbGl6ZSwgLi4udGhpcy5vcHRpb25zIH0pO1xuICB9XG5cbiAgc3RhdGljIGluaXRSZWxhdGlvbnNBbmRIb29rcygpIHtcbiAgICBpZiAodGhpcy5pbml0UmVsYXRpb25zKSB0aGlzLmluaXRSZWxhdGlvbnMoKTtcbiAgICBpZiAodGhpcy5pbml0SG9va3MpIHRoaXMuaW5pdEhvb2tzKCk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZmluZEJ5SWQoaWQsIGZpZWxkcykge1xuICAgIGNvbnN0IHF1ZXJ5ID0ge1xuICAgICAgaWQsXG4gICAgICBhdHRyaWJ1dGVzOiBmaWVsZHNcbiAgICB9O1xuXG4gICAgY29uc3QgZW50aXR5ID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZmluZE9uZUVudGl0eShmaWVsZCwgdmFsdWUpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIHdoZXJlOiB7IFtmaWVsZF06IHZhbHVlIH1cbiAgICB9O1xuXG4gICAgY29uc3QgZW50aXR5ID0gYXdhaXQgdGhpcy5maW5kT25lKHF1ZXJ5KTtcblxuICAgIHJldHVybiBlbnRpdHk7XG4gIH1cblxuICBzdGF0aWMgYXN5bmMgZmluZEFsbEVudGl0eShmaWVsZHMpIHtcbiAgICBjb25zdCBxdWVyeSA9IHtcbiAgICAgIGF0dHJpYnV0ZXM6IGZpZWxkc1xuICAgIH07XG5cbiAgICBjb25zdCBlbnRpdHkgPSBhd2FpdCB0aGlzLmZpbmRBbGwocXVlcnkpO1xuXG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCYXNlO1xuIl19